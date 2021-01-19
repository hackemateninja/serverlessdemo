const {query} = require("./util/hasura");

exports.handler = async ()=>{
	const {movies} = await query({
		query: `
			query {
				movies {
					id
					poster
					tagline
					title
				}
			}
		`
	});

	return{
		statusCode: 200,
		body: JSON.stringify(movies)
	}
}
