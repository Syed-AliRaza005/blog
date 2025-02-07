

export const blog=({
    name:"blog",
    title:"Blog",
    type:"document",
    fields:[{
        name:"title",
        title:"Title",
        type:"string"
    },
    {
        name:"description",
        title:"Description",
        type:"text"
    },
    {
        name:"publishDate",
        title: "Publish Date",
        type: "date"

    },
    {
        name: "author",
        title: "Author",
        type:"string"
    },
    {
        name:"image",
        title:"Image",
        type:"image",
        options:{
            hotspot:true
        }
        
    },
    {
        name:"slug",
        title:"Slug",
        type:"slug",
        options:{
            source:"title"
        }
    }


    ]

})
