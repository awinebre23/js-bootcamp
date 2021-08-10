function User(name, gender, age, registered, req, userStatus) {
    this.userName = name || 'Unregistered User';
    this.userGender = gender || 'unknown';
    this.userAge = age|| 'unknown';
    this.userCode = this.userGender || 'unknown' + this.userAge || 'unknown';
    this.registered = false;
    this.userReq = req || 'unknown';
    this.userStatus = null;
}

export { User }
