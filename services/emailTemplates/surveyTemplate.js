const keys = require('../../config/keys');

module.exports = (survey) => {
    return `
    <html>
    <body>
        <div style="text-align: center;">
            <h3></h3>
            <p></p>
            <p>${survey.body}</p>
            <div>
                <a href="${keys.redirectDomain}/thanks/yes">Yes</a>
            </div>
            <div>
                <a href="${keys.redirectDomain}/thanks/no">No</a>
            </div>
        </div>
    </body>
</html>
`;
};