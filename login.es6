((username, password) => {
    if (username !== 'admin' || password !== 'radical') {
        console.log('incorrect login');
    }
})('admin', 'not radical');
