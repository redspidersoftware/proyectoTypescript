"use strict";
const username = document.querySelector("input#input-username");
const password = document.querySelector("input#input-password");
const userForm = document.querySelector("form");
userForm.onsubmit = (event) => {
    event.preventDefault();
    if (!username || !password)
        return;
    document.cookie = `username=${username === null || username === void 0 ? void 0 : username.value}`;
    document.cookie = `password=${password === null || password === void 0 ? void 0 : password.value}`;
    (username === null || username === void 0 ? void 0 : username.value) && localStorage.setItem("username", username === null || username === void 0 ? void 0 : username.value); // sessionStotage
    (password === null || password === void 0 ? void 0 : password.value) && localStorage.setItem("password", password === null || password === void 0 ? void 0 : password.value);
};
//# sourceMappingURL=sessionStotage.js.map