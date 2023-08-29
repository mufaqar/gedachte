export default {
     name: "events",
     title: "Workshops & Events",
     type: "document",
     fields: [
       {
         title: "Name",
         name: "name",
         type: "string"
       },
       {
        title: "Feature Image",
        name: "featureImage",
        type: "image"
      },
       {
         title: "Date",
         name: "date",
         type: "date"
       },
       {
         title: "Subscribers",
         name: "subscribers",
         type: "string"
       },
       {
         title: "Link",
         name: "link",
         type: "url"
       }
     ]
   }