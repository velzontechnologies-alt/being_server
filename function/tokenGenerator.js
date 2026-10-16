
const jsonwebtoken = require('jsonwebtoken')

async function prefToken(data) {
	try {
		const token = jsonwebtoken.sign(
            {
                phone_number: data.phone_number,
                email: data.email,
                name: data.full_name,
                admin_id: data._id,
				status: data.status
				
            }, 
            process.env.SECRET, 
            {
                //expiresIn: '6h',
            })

		return {
			success: true,
			message: 'Token generated successfully',
			token,
		}
	} catch (error) {
		console.error('Token generation error:', error);
		return {
			success: false,
			message: error.message,
			error,
		}
	}
}

module.exports = prefToken
