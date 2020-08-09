let contentTypesSchema = {
    "contentTypes": [{
        "displayName" : "Feature", 
        "displayNamePlural" : "Features",
        "iconName" : "page",
        "description" : "",
        "category" : "post",
        "name" : "feature",
        "isMultiple": true,
        "fields" : [{
                "displayName" : "Title",
                "description" : null,
                "metadata" : {
                    "required" : true,
                    "isTitle" : true
                },
                "type" : "Text"
            },{
                "displayName" : "Body",
                "metadata" : {
                    "required" : true
                },
                "type" : "RichText"
            },{
                "displayName" : "Image",
                "metadata" : {
                    "required" : true,
                    "helpText" : "Featured image",
                    "isFeaturedImage" : true
                },
                "type" : "Image"
            }
    ]
    }]
}

module.exports = contentTypesSchema;