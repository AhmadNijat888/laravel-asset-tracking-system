const loginForm = document.getElementById('loginForm');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const roleSelect = document.getElementById('role');


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
    }
}

function showAlertMessage(message, isSuccess = false) {
    const existingAlert = document.querySelector('.alert-message');
    if (existingAlert) {
        existingAlert.remove();
    }
    
    const alertDiv = document.createElement('div');
    alertDiv.className = 'alert-message';
    alertDiv.textContent = message;
    alertDiv.style.cssText = `
        background: ${isSuccess ? 'rgb(76, 174, 79)' : 'rgb(255, 68, 68)'};
        color: white;
        padding: 12px;
        border-radius: 8px;
        margin-bottom: 20px;
        text-align: center;
        font-size: 14px;
        font-weight: bold;
    `;
    
    const loginBox = document.querySelector('.login-box');
    loginBox.insertBefore(alertDiv, loginBox.firstChild);
    
    setTimeout(() => {
        alertDiv.remove();
    }, 3000);
}


function validateUsername() {
    const username = usernameInput.value.trim();
    
    if (username === '') {
        showError(usernameInput, 'usernameError', 'مهرباني وکړئ د کارونکي نوم دننه کړئ');
        return false;
    }
    
    if (username.length < 3) {
        showError(usernameInput, 'usernameError', 'د کارونکي نوم باید لږ تر لږه 3 توري وي');
        return false;
    }
    
    if (username.length > 20) {
        showError(usernameInput, 'usernameError', 'د کارونکي نوم باید له 20 تورو څخه کم وي');
        return false;
    }
    
    
    clearError(usernameInput, 'usernameError');
    return true;
}


function validatePassword() {
    const password = passwordInput.value.trim();
    
    if (password === '') {
        showError(passwordInput, 'passwordError', 'مهرباني وکړئ پټ نوم دننه کړئ');
        return false;
    }
    
    if (password.length < 4) {
        showError(passwordInput, 'passwordError', 'پټ نوم باید لږ تر لږه 4 توري وي');
        return false;
    }
    
    if (password.length > 30) {
        showError(passwordInput, 'passwordError', 'پټ نوم باید له 30 تورو څخه کم وي');
        return false;
    }
    
    clearError(passwordInput, 'passwordError');
    return true;
}


function validateRole() {
    const role = roleSelect.value;
    
    if (role === '') {
        showError(roleSelect, 'roleError', 'مهرباني وکړئ خپل رول انتخاب کړئ');
        return false;
    }
    
    clearError(roleSelect, 'roleError');
    return true;
}


usernameInput.addEventListener('input', function() {
    if (usernameInput.value.trim() !== '') {
        validateUsername();
    } else {
        clearError(usernameInput, 'usernameError');
    }
});

passwordInput.addEventListener('input', function() {
    if (passwordInput.value.trim() !== '') {
        validatePassword();
    } else {
        clearError(passwordInput, 'passwordError');
    }
});

roleSelect.addEventListener('change', function() {
    if (roleSelect.value !== '') {
        validateRole();
    } else {
        clearError(roleSelect, 'roleError');
    }
});


loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const isUsernameValid = validateUsername();
    const isPasswordValid = validatePassword();
    const isRoleValid = validateRole();
    
    if (isUsernameValid && isPasswordValid && isRoleValid) {
        const username = usernameInput.value.trim();
        const role = roleSelect.value;
        
        showAlertMessage(`ښه راغلاست! ${username} `, true);
        
        const userData = {
            username: username,
            role: role,
            loginTime: new Date().toLocaleString(),
            isLoggedIn: true
        };
        localStorage.setItem('loggedInUser', JSON.stringify(userData));
        
        setTimeout(() => {
            window.location.href = '/login';
        }, 1000);
    } else {
        showAlertMessage('مهرباني وکړئ ټول معلومات په سمه توګه ډک کړئ', false);
    }
});

usernameInput.addEventListener('focus', function() {
    clearError(usernameInput, 'usernameError');
});

passwordInput.addEventListener('focus', function() {
    clearError(passwordInput, 'passwordError');
});

roleSelect.addEventListener('focus', function() {
    clearError(roleSelect, 'roleError');
});

const style = document.createElement('style');
style.textContent = `
    .error-text {
        display: none;
        direction: rtl;
        text-align: right;
    }
    
    input.error, select.error {
        border-color: rgb(255, 68, 68) !important;
    }
    
    input.success, select.success {
        border-color: rgb(76, 174, 79) !important;
    }
`;
document.head.appendChild(style);

console.log('Login form validation loaded successfully!');