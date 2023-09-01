export const QTestimonial = `*[_type == "testimonials"]`

export const QFaqs = `*[_type == "faqs"]`

export const QStaff = `*[_type == "staff"]{
     name,
     featureImage{
          asset->{
               url
          }
     },
     facebook,
     designation,
     google,
     twiter
 }`

export const QTeams = `*[_type == "teams"]{
     name,
     featureImage{
          asset->{
               url
          }
     },
     type,
     designation,
     university,
     about,
     client,
     rating,
 }`

export const QBlogs = `*[_type == "blog"]{
     name, slug, featureImage{asset->{url}}, excerpt, description, _createdAt
 }`

 export const QSingleBlogs = `*[_type == "blog" && slug.current == $slug][0]{
     name, slug, featureImage{asset->{url}}, excerpt, description, _createdAt
 }`