const core = require('@actions/core')

function run() {
    const bucket = core.getInput('bucket', { required: true})
    const distFolder = core.getInput('dist-folder', { required: true})
    core.notice('Hello World');
    core.notice(bucket);
    core.notice(distFolder);

    const urlWebsite = 'https://rtt.olnorska.ch';
    core.setOutput('website-url', urlWebsite);
}

run();