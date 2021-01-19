const {query} = require('./util/hasura');

exports.handler = async (event)=>{
	const {id, title, tagline, poster} = JSON.parse(event.body);

	const result = query({
		query: `
			mutation ($tagline: String!, $poster: String!, $id: String!, $title: String!) {
        insert_movies(objects: {id: $id, poster: $poster, tagline: $tagline, title: $title}) {
        returning {
          id
          poster
          tagline
          title
        }
      }
		}
		`,
		variables: {id, title, tagline, poster}
	});

	return{
		statusCode: 200,
		body: JSON.stringify(result)
	}
}
