#!/bin/bash

cd ~/My_Portfolio_Website/my-portfolio

cat <<EOF > ecosystem.config.js
module.exports = {
	apps: [
		{
			name: "portfolio",
			script: "node_modules/.bin/next",
			args: "start -p 3000",
			env: {
				NODE_ENV: "production"
			}
		}
	]
};
EOF

