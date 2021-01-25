const jestAddEnvironmentData = () => {
    reporter
        .addEnvironment('node', process.versions.node)
        .addEnvironment('platform', process.platform)
        .addEnvironment('architecture', process.arch)
        .addEnvironment('PATH', process.env.PATH);
}

module.exports = { jestAddEnvironmentData }
