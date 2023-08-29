export default {
     name: "blog",
     title: "Blog",
     type: "document",
     fields: [
       {
         title: "Name",
         name: "name",
         type: "string"
       },
       {
        title: 'Slug',
        name: 'slug',
        type: 'slug',
        options: {
          source: 'question',
          maxLength: 200, // will be ignored if slugify is set
          slugify: input => input
                               .toLowerCase()
                               .replace(/\s+/g, '-')
                               .slice(0, 200)
        }
      },
       {
        title: "Feature Image",
        name: "featureImage",
        type: "image"
      },
      {
        title: "Excerpt",
        name: "excerpt",
        type: "text"
      },
      {
        title: "Description",
        name: "description",
        type: "text"
      }
       
     ]
   }