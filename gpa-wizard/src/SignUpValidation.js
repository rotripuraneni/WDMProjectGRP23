function Validation(values) {
	let error = {}
	const userName_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
	const password_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

	if (values.userName === "") {
		error.userName = "userName should not be empty"
	}

	else if (!userName_pattern.test(values.userName)) {
		error.userName = "userName Didnt match"
	}
	else {
		error.userName = ""
	}

	if (values.email === "") {
		error.email = "email should not be empty"
	}

	else if (!userName_pattern.test(values.email)) {
		error.email = "email Didnt match"
	}
	else {
		error.email = ""
	}

	if (values.password === "") {
		error.password = "PAssword should not be empty"
	}

	else if (!password_pattern.test(values.password)) {
		error.password = "Password Didnt match"
	}
	else {
		error.password = ""
	}

	return error;


}

export default Validation