export function User(name, gender, age, registered, req, userStatus) {
	return {
		userName: name,
		userGender: gender,
		userAge: age,
		userReq: req,
		userCode: gender + age,
		registered: false,
		userStatus: null,
		userRegistered: false
	};
}


















