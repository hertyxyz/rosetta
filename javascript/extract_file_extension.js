const test_cases = [
    'http://example.com/download.tar.gz',
    'CharacterModel.3DS',
    '.desktop',
    'document',
    'document.txt_backup',
    '/etc/pam.d/login'

]

test_cases.forEach(e => {
    let regex = /\.[a-zA-Z0-9]+$/
    console.log(`${e} -> ${regex.test(e) ? regex.exec(e)[0] : ''}`)
})