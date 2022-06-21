module.exports = {
    apps: [
        {
            "name": "myapp",
            "script": "./app.js",
            "instances": "2",
            "exec_mode": "cluster",
            "watch": true,
            "env": {
                "NODE_ENV": "development"
            },
            "env_production": {
                "NODE_ENV": "production"
            }
        },
        {
            "name": "myapp2",
            "script": "./app.js"
        }
    ]
}
