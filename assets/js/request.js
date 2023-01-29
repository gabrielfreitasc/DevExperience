// XMLHttpRequest [AJAX](GET) + Promises
    // Recomendado ler os codigos de http
    const request = (obj) => {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open(obj.method, obj.url, true); // basicamente funciona como um GET
            xhr.send(); // basicamente funciona como um POST, recebendo dados de algo --> xhr.send(dados do (form, etc))
        
            xhr.addEventListener('load', () => {
                if(xhr.status >= 200 && xhr.status < 300) {
                    resolve(xhr.responseText);
                } else {
                    reject(xhr.status);
                }
            });
        })
    };
    
    // capturando os clicks nos links <a></a>
    document.addEventListener('click', () => {
        const el = e.target;
        const tag = el.tagName.toLowerCase();
    
        if(tag === 'a') {
            e.preventDefault(); // vai prevenir o evento, quando for clicado no link, não redirecionar para a page direito
            loadingPage(el);
        }
    })
    
    async function loadingPage(el) {
        const href = el.getAttribute('href');
    
        try {
            const response = await request({
                method: 'GET',
                url: href,
            });
            loadingResult(response);
        } catch (error) {
            console.log(error);
        }
    
    }
    
    function loadingResult(response) {
        const containerPages = document.querySelector('.container-pages');
        containerPages.innerHTML = response;
    }