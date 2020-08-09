let schema = {
        "contentTypes": [{
            "items" : [], 
            "orderKey" : "updatedAt", //default updatedAt
            "orderDirection" : "desc", //default desc
            "isStandalone" : true,
            "users" : [ 
                ObjectId("5eafcebd834092647ff71fe6")
            ],
            "childReferences" : [], //default []
            "parentReferences" : [], //default []
            "displayName" : "Feature", 
            "displayNamePlural" : "Features",
            "iconName" : "page", //default page
            "isMultiple" : true, //default true
            "slug" : "feature", //auto generated
            "description" : "",
            "category" : "post", //default post
            "name" : "feature",
            "environment" : ObjectId("5f1ffe6bf513ed7900c591d8"), //auto generated
            "author" : ObjectId("5eafcebd834092647ff71fe6"), //auto generated
            "rank" : "U", //auto generated
            "permissionsScope" : "space", //default space
            "_acl" : { //auto generated
                "user:5eafcebd834092647ff71fe6" : [ 
                    "owner"
                ]
            },
            "createdAt" : ISODate("2020-07-28T10:43:32.725Z"), //auto generated
            "updatedAt" : ISODate("2020-07-28T10:52:11.976Z"), //auto generated
            "fields" : {
                "title" : {
                    "displayName" : "Title",
                    "name" : "title", // auto generated
                    "description" : null,
                    "metadata" : {
                        "required" : null, // default null
                        "helpText" : null, // default null
                        "appearance" : {
                            "name" : "textbox" // default textbox
                        },
                        "isTitle" : true // default false
                    },
                    "type" : "Text", 
                    "rank" : "U" // auto generated
                },
                "body" : {
                    "displayName" : "Body",
                    "name" : "body",
                    "description" : null,
                    "metadata" : {
                        "required" : true,
                        "helpText" : null
                    },
                    "type" : "RichText",
                    "rank" : "g"
                },
                "image" : {
                    "displayName" : "Image",
                    "name" : "image",
                    "description" : null,
                    "metadata" : {
                        "required" : true,
                        "helpText" : "Featured image",
                        "isFeaturedImage" : true
                    },
                    "type" : "Image",
                    "rank" : "p"
                }
            },
            "fieldsTitleSlug" : "title" // auto generated
        }]
}