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
          source: 'name',
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
        type: "array",
        of: [
          {
            type: "block",
          },
          {
            type: "image",
            fields: [
              {
                type: "text",
                name: "alt",
                title: "Alternative text",
                description: `Some of your visitors cannot see images, 
                  be they blind, color-blind, low-sighted; 
                  alternative text is of great help for those 
                  people that can rely on it to have a good idea of 
                  what\'s on your page.`,
                options: {
                  isHighlighted: true,
                },
              },
            ],
          },
        ],
      },
       
     ]
   }