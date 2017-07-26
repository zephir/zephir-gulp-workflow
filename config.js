module.exports = {
    "configs": {
        "enableBrowserSync": true,
        "browserSyncHost": "localhost",
        "pxtorem": {
            "baseFontSize": 16,
            "selectorBlackList": [/^html$/]
        }
    },

    "source": {
        "filesToWatch": [
            "../**/*.php",
            "../**/*.html"
        ],
        "styles": [
            "scss/**/*.scss"
        ],
        "scripts": [
            "js/libs/1/*.js",
            "js/libs/2/*.js",
            "js/libs/3/*.js",
            "js/libs/*.js",
            "js/*.js"
        ]
    },

    "dest": {
        "local": {
            "styles": "local/css/",
            "scripts": "local/js/"
        },

        "dev": {
            "styles": "dev/css/",
            "scripts": "dev/js/"
        },

        "prep": {
            "styles": "prep/css/",
            "scripts": "prep/js/"
        },

        "prod": {
            "styles": "prod/css/",
            "scripts": "prod/js/"
        }
    }
};
