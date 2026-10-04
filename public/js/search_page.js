document.addEventListener('DOMContentLoaded', function() {
    
    const searchInput = document.getElementById('searchInput');
    const statusFilter = document.getElementById('statusFilter');
    const departmentFilter = document.getElementById('departmentFilter');
    const searchBtn = document.getElementById('searchBtn');
    const resetBtn = document.getElementById('resetBtn');
    const searchError = document.getElementById('searchError');
    const noResultsMsg = document.getElementById('noResultsMsg');
    const resultsBody = document.getElementById('searchResultsBody');
    
    if (!searchInput || !searchBtn) {
        console.error('Search elements not found!');
        return;
    }
    
    console.log('All search elements found successfully');
    
    let allRows = [];
    
    function saveOriginalRows() {
        if (!resultsBody) return;
        const rows = resultsBody.querySelectorAll('tr');
        allRows = [];
        
        for (const row of rows) {
            const cells = row.querySelectorAll('td');
            if (cells.length >= 4) {
                allRows.push({
                    id: cells[0].innerText,
                    name: cells[1].innerText,
                    status: cells[2].innerText,
                    department: cells[3].innerText,
                    element: row.cloneNode(true)
                });
            }
        }
        console.log('Saved', allRows.length, 'original rows for searching');
    }
    
    function showError(message) {
        if (searchError) {
            searchError.textContent = message;
            searchError.style.color = 'rgb(255, 68, 68)';
            searchError.style.fontSize = '12px';
            searchError.style.display = 'block';
            searchError.style.marginTop = '10px';
        }
        
        setTimeout(() => {
            if (searchError) {
                searchError.style.display = 'none';
            }
        }, 3000);
    }
    
    function clearError() {
        if (searchError) {
            searchError.style.display = 'none';
            searchError.textContent = '';
        }
    }
    
    function showAlertMessage(message, isSuccess = false) {
        const existingAlert = document.querySelector('.search-alert');
        if (existingAlert) {
            existingAlert.remove();
        }
        
        const alertDiv = document.createElement('div');
        alertDiv.className = 'search-alert';
        alertDiv.textContent = message;
        alertDiv.style.cssText = `
            background: ${isSuccess ? 'rgb(76, 174, 79)' : 'rgb(255, 68, 68)'};
            color: white;
            padding: 10px 15px;
            border-radius: 8px;
            margin-bottom: 15px;
            text-align: center;
            font-size: 13px;
            font-weight: bold;
            direction: rtl;
        `;
        
        const searchBox = document.querySelector('.search-box');
        if (searchBox) {
            searchBox.insertBefore(alertDiv, searchBox.firstChild);
        }
        
        setTimeout(() => {
            if (alertDiv && alertDiv.remove) {
                alertDiv.remove();
            }
        }, 3000);
    }
    

    function validateSearchInput() {
        const searchTerm = searchInput.value.trim();
        
        if (searchTerm.length > 0 && searchTerm.length < 2) {
            showError('د پلټلو کلمه باید لږ تر لږه 2 توري وي');
            return false;
        }
        
        if (searchTerm.length > 50) {
            showError('د پلټلو کلمه باید له 50 تورو څخه کمه وي');
            return false;
        }
        
        clearError();
        return true;
    }
    

    function performSearch() {
        
        if (!resultsBody || !noResultsMsg) return;
        
        const searchTerm = searchInput.value.trim();
        if (searchTerm.length > 0 && !validateSearchInput()) {
            return;
        }
        
        const status = statusFilter.value;
        const department = departmentFilter.value;
        
        searchBtn.textContent = 'پلټل کیږي...';
        searchBtn.disabled = true;
        
        setTimeout(() => {
            resultsBody.innerHTML = '';
            
            const filteredRows = allRows.filter(row => {
                let matchesSearch = true;
                if (searchTerm !== '') {
                    const searchLower = searchTerm.toLowerCase();
                    const idMatch = row.id.toLowerCase().includes(searchLower);
                    const nameMatch = row.name.toLowerCase().includes(searchLower);
                    matchesSearch = idMatch || nameMatch;
                }
                
                let matchesStatus = true;
                if (status !== '') {
                    matchesStatus = row.status === status;
                }
                
                let matchesDepartment = true;
                if (department !== '') {
                    matchesDepartment = row.department === department;
                }
                
                return matchesSearch && matchesStatus && matchesDepartment;
            });
            
            if (filteredRows.length === 0) {
                noResultsMsg.style.display = 'block';
                resultsBody.style.display = 'none';
                showAlertMessage('د پلټلو پایلې ونه موندل شول', false);
            } else {
                noResultsMsg.style.display = 'none';
                resultsBody.style.display = 'table-row-group';
                
                for (const row of filteredRows) {
                    const newRow = document.createElement('tr');
                    newRow.innerHTML = `
                        <td>${row.id}</td>
                        <td>${row.name}</td>
                        <td>${row.status}</td>
                        <td>${row.department}</td>
                    `;
                    resultsBody.appendChild(newRow);
                }
                
                showAlertMessage(`${filteredRows.length} پایلې وموندل شوې`, true);
            }
            
            searchBtn.textContent = 'پلټل';
            searchBtn.disabled = false;
            
            console.log('Search completed, found:', filteredRows.length);
        }, 300);
    }
    
    function resetFilters() {
        console.log('Resetting filters...');
        
        searchInput.value = '';
        statusFilter.value = '';
        departmentFilter.value = '';
        
        clearError();
        
        if (resultsBody && noResultsMsg) {
            resultsBody.innerHTML = '';
            noResultsMsg.style.display = 'none';
            resultsBody.style.display = 'table-row-group';
            
            for (const row of allRows) {
                const newRow = document.createElement('tr');
                newRow.innerHTML = `
                    <td>${row.id}</td>
                    <td>${row.name}</td>
                    <td>${row.status}</td>
                    <td>${row.department}</td>
                `;
                resultsBody.appendChild(newRow);
            }
        }
        
        showAlertMessage('ټول فلترونه بیا تنظیم شول', true);
        console.log('Filters reset successfully');
    }
    

    if (searchBtn) {
        searchBtn.addEventListener('click', function(event) {
            event.preventDefault();
            performSearch();
        });
    }
    
    if (resetBtn) {
        resetBtn.addEventListener('click', function(event) {
            event.preventDefault();
            resetFilters();
        });
    }
    
    if (searchInput) {
        searchInput.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                event.preventDefault();
                performSearch();
            }
        });
        
    }
    
    if (statusFilter) {
        statusFilter.addEventListener('change', function() {
            performSearch();
        });
    }
    
    if (departmentFilter) {
        departmentFilter.addEventListener('change', function() {
            performSearch();
        });
    }
    
    saveOriginalRows();
    
    console.log('Search page validation initialized successfully!');
});