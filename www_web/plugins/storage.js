export default function ({
    store,
    app: {
        $cookiz
    }
}) {
    getDeviceInfo(store)

    function getDeviceInfo (store) {
        const width = document.body.clientWidth;
        let deviceSize = ''
        // 1200-15 15是滚动条宽
        if (width > 1185) {
            deviceSize = 'large'
        } else if (width > 767) {
            deviceSize = 'medium'
        } else {
            deviceSize = 'small'
        }
        $cookiz.set('deviceSize', deviceSize, {
            path: '/',
            maxAge: 60 * 60 * 24 * 30
        })
        store.commit('updateDeviceSize', deviceSize)
    }
    if (typeof window !== 'undefined') {
        window.addEventListener('resize', function () {
            getDeviceInfo(store)
        })
    }


}
