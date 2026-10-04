document.addEventListener('DOMContentLoaded', function() {
    
    loadAssetsFromStorage();
    
    const assetForm = document.getElementById('assetForm');
    const assetNameInput = document.getElementById('assetName');
    const assetTypeInput = document.getElementById('assetType');
    const assetDepartmentSelect = document.getElementById('assetDepartment');
    const assetStatusSelect = document.getElementById('assetStatus');
    
    if (!assetForm) {
        console.error('Asset form not found! Check ID "assetForm"');
        return;
    }
    

    function saveAssetsToStorage(assets) {
        localStorage.setItem('assetsList', JSON.stringify(assets));
        console.log('Assets saved to localStorage:', assets.length);
    }
    

    function loadAssetsFromStorage() {
        const savedAssets = localStorage.getItem('assetsList');

        const tableBody = document.getElementById('assetsTableBody');
        if (tableBody) {
            tableBody.innerHTML = '';
        }

        if (savedAssets) {
            const assets = JSON.parse(savedAssets);
            
            if (assets.length > 0) {
                for (const asset of assets) {
                    addAssetToTable(asset);
                }
            }
        } else {
            console.log('No saved assets found in localStorage');
        }
    }
    
    
    function saveAllAssetsFromTable() {
        const tableBody = document.getElementById('assetsTableBody');
        if (!tableBody) return;
        
        const rows = tableBody.querySelectorAll('tr');
        const assets = [];
        
        for (const row of rows) {
            const id = row.cells[0].innerText;
            const name = row.cells[1].innerText;
            const statusSpan = row.cells[2].querySelector('span');
            const status = statusSpan ? statusSpan.innerText : row.cells[2].innerText;
            
            assets.push({ id, name, status });
        }
        
        saveAssetsToStorage(assets);
    }
    
    function showError(inputElement, errorElementId, message) {
        const errorElement = document.getElementById(errorElementId);
        if (errorElement) {
            errorElement.textContent = message;
            errorElement.style.color = 'rgb(255, 68, 68)';
            errorElement.style.fontSize = '12px';
            errorElement.style.display = 'block';
            errorElement.style.marginTop = '5px';
        }
        
        if (inputElement) {
            inputElement.style.border = '1px solid rgb(255, 68, 68)';
            inputElement.style.backgroundColor = '#fff5f5';
        }
    }
    
    function clearError(inputElement, errorElementId) {
        const errorElement = document.getElementById(errorElementId);
        if (errorElement) {
            errorElement.textContent = '';
            errorElement.style.display = 'none';
        }
        
        if (inputElement) {
            inputElement.style.border = '1px solid rgb(204, 204, 204)';
            inputElement.style.backgroundColor = 'white';
        }
    }
    

    function showAlertMessage(message, isSuccess = false) {
        const existingAlert = document.querySelector('.asset-alert');
        if (existingAlert) {
            existingAlert.remove();
        }
        
        const alertDiv = document.createElement('div');
        alertDiv.className = 'asset-alert';
        alertDiv.textContent = message;
        alertDiv.style.cssText = `
            background: ${isSuccess ? '#4CAF50' : 'rgb(255, 68, 68)'};
            color: white;
            padding: 12px 20px;
            border-radius: 8px;
            margin-bottom: 20px;
            text-align: center;
            font-size: 14px;
            font-weight: bold;
            direction: rtl;
        `;
        
        const addAssetDiv = document.querySelector('.add-asset');
        if (addAssetDiv) {
            addAssetDiv.insertBefore(alertDiv, addAssetDiv.firstChild);
        }
        
        setTimeout(() => {
            if (alertDiv && alertDiv.remove) {
                alertDiv.remove();
            }
        }, 3000);
    }
    

    function validateAssetName() {
        if (!assetNameInput) return false;
        
        const name = assetNameInput.value.trim();
        
        if (name === '') {
            showError(assetNameInput, 'assetNameError', 'مهرباني وکړئ د شتمني نوم دننه کړئ');
            return false;
        }
        
        if (name.length < 2) {
            showError(assetNameInput, 'assetNameError', 'د شتمني نوم باید لږ تر لږه 2 توري وي');
            return false;
        }
        
        if (name.length > 50) {
            showError(assetNameInput, 'assetNameError', 'د شتمني نوم باید له 50 تورو څخه کم وي');
            return false;
        }
        
        clearError(assetNameInput, 'assetNameError');
        return true;
    }
    

    function validateAssetType() {
        if (!assetTypeInput) return false;
        
        const type = assetTypeInput.value.trim();
        
        if (type === '') {
            showError(assetTypeInput, 'assetTypeError', 'مهرباني وکړئ د شتمني ډول دننه کړئ');
            return false;
        }
        
        if (type.length < 2) {
            showError(assetTypeInput, 'assetTypeError', 'د شتمني ډول باید لږ تر لږه 2 توري وي');
            return false;
        }
        
        if (type.length > 30) {
            showError(assetTypeInput, 'assetTypeError', 'د شتمني ډول باید له 30 تورو څخه کم وي');
            return false;
        }
        
        clearError(assetTypeInput, 'assetTypeError');
        return true;
    }
    

    function validateDepartment() {
        if (!assetDepartmentSelect) return false;
        
        const department = assetDepartmentSelect.value;
        
        if (department === '') {
            showError(assetDepartmentSelect, 'assetDepartmentError', 'مهرباني وکړئ څانګه انتخاب کړئ');
            return false;
        }
        
        clearError(assetDepartmentSelect, 'assetDepartmentError');
        return true;
    }
    

    function validateStatus() {
        if (!assetStatusSelect) return false;
        
        const status = assetStatusSelect.value;
        
        if (status === '') {
            showError(assetStatusSelect, 'assetStatusError', 'مهرباني وکړئ حالت انتخاب کړئ');
            return false;
        }
        
        clearError(assetStatusSelect, 'assetStatusError');
        return true;
    }
    

    function generateAssetId() {
        const savedAssets = localStorage.getItem('assetsList');
        let maxId = 102; // Default starting point
        
        if (savedAssets) {
            const assets = JSON.parse(savedAssets);
            for (const asset of assets) {
                const idNum = parseInt(asset.id.replace('AST-', ''));
                if (idNum > maxId) {
                    maxId = idNum;
                }
            }
        }
        
        const newId = maxId + 1;
        return 'AST-' + newId;
    }
    

    function addAssetToTable(asset) {
        const tableBody = document.getElementById('assetsTableBody');
        if (!tableBody) return;
        
        const statusClass = asset.status === 'فعال' ? 'green' : (asset.status === 'ساتنه' ? 'yellow' : 'blue');
        
        const newRow = document.createElement('tr');
        newRow.setAttribute('data-id', asset.id);
        newRow.innerHTML = `
            <td>${asset.id}</td>
            <td>${asset.name}</td>
            <td><span class="badge ${statusClass}">${asset.status}</span></td>
            <td><button class="btn-small" onclick="editAsset(this)">تغیر</button> <button class="btn-small red" onclick="deleteAsset(this)">ړنګول</button></td>
        `;
        
        tableBody.appendChild(newRow);
    }
    
    
    if (assetNameInput) {
        assetNameInput.addEventListener('input', function() {
            if (assetNameInput.value.trim() !== '') {
                validateAssetName();
            } else {
                clearError(assetNameInput, 'assetNameError');
            }
        });
        
        assetNameInput.addEventListener('focus', function() {
            clearError(assetNameInput, 'assetNameError');
        });
    }
    
    if (assetTypeInput) {
        assetTypeInput.addEventListener('input', function() {
            if (assetTypeInput.value.trim() !== '') {
                validateAssetType();
            } else {
                clearError(assetTypeInput, 'assetTypeError');
            }
        });
        
        assetTypeInput.addEventListener('focus', function() {
            clearError(assetTypeInput, 'assetTypeError');
        });
    }
    
    if (assetDepartmentSelect) {
        assetDepartmentSelect.addEventListener('change', function() {
            if (assetDepartmentSelect.value !== '') {
                validateDepartment();
            } else {
                clearError(assetDepartmentSelect, 'assetDepartmentError');
            }
        });
    }
    
    if (assetStatusSelect) {
        assetStatusSelect.addEventListener('change', function() {
            if (assetStatusSelect.value !== '') {
                validateStatus();
            } else {
                clearError(assetStatusSelect, 'assetStatusError');
            }
        });
    }

    
    if (assetForm) {
        assetForm.addEventListener('submit', function(event) {
            event.preventDefault();
            console.log('Form submitted, validating...');
            
            const isNameValid = validateAssetName();
            const isTypeValid = validateAssetType();
            const isDepartmentValid = validateDepartment();
            const isStatusValid = validateStatus();
            
            if (isNameValid && isTypeValid && isDepartmentValid && isStatusValid) {
                const newAsset = {
                    id: generateAssetId(),
                    name: assetNameInput.value.trim(),
                    type: assetTypeInput.value.trim(),
                    department: assetDepartmentSelect.value,
                    status: assetStatusSelect.value,
                    dateAdded: new Date().toLocaleString()
                };
                
                console.log('New asset added:', newAsset);
                
                addAssetToTable(newAsset);
                
                saveAllAssetsFromTable();
                
                showAlertMessage(`شتمني "${newAsset.name}" په بریالیتوب سره اضافه شوه!`, true);
                
                assetForm.reset();
                
                clearError(assetNameInput, 'assetNameError');
                clearError(assetTypeInput, 'assetTypeError');
                clearError(assetDepartmentSelect, 'assetDepartmentError');
                clearError(assetStatusSelect, 'assetStatusError');
            } else {
                showAlertMessage('مهرباني وکړئ ټول معلومات په سمه توګه ډک کړئ', false);
            }
        });
    }
    
    console.log('Assets form validation initialized successfully!');
});


window.editAsset = function(button) {
    const row = button.parentElement.parentElement;
    const currentName = row.cells[1].innerText;
    const newName = prompt('نوی نوم وارد کړئ:', currentName);
    
    if (newName && newName.trim() !== '') {
        row.cells[1].innerText = newName.trim();
        
        const tableBody = document.getElementById('assetsTableBody');
        const rows = tableBody.querySelectorAll('tr');
        const assets = [];
        
        for (const r of rows) {
            const id = r.cells[0].innerText;
            const name = r.cells[1].innerText;
            const statusSpan = r.cells[2].querySelector('span');
            const status = statusSpan ? statusSpan.innerText : r.cells[2].innerText;
            assets.push({ id, name, status });
        }
        
        localStorage.setItem('assetsList', JSON.stringify(assets));
        
        showAlertMessage('شتمني بدله شوه!', true);
    }
};


window.deleteAsset = function(button) {
    if (confirm('آیا تاسو طمیناني یاست چې دا شتمني‌‌ ‌‌ډیلیټوی؟')) {
        const row = button.parentElement.parentElement;
        const assetName = row.cells[1].innerText;
        row.remove();
        
        const tableBody = document.getElementById('assetsTableBody');
        const rows = tableBody.querySelectorAll('tr');
        const assets = [];
        
        for (const r of rows) {
            const id = r.cells[0].innerText;
            const name = r.cells[1].innerText;
            const statusSpan = r.cells[2].querySelector('span');
            const status = statusSpan ? statusSpan.innerText : r.cells[2].innerText;
            assets.push({ id, name, status });
        }
        
        localStorage.setItem('assetsList', JSON.stringify(assets));
        
        showAlertMessage(` شتمني "${assetName}" د مینڅه ولاړه!`, true);
    }
};