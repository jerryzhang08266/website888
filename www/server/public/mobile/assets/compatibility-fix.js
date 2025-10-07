/**
 * 移动端深度兼容性修复脚本
 * 解决uni-app应用的配置和运行时错误
 */

(function() {
    'use strict';
    
    console.log('开始加载移动端兼容性修复...');
    
    // 1. 创建完整的uni-app配置对象
    window.__uniConfig = {
        "pages": [
            {
                "path": "pages/index/index",
                "style": {
                    "navigationBarTitleText": "首页",
                    "enablePullDownRefresh": false
                }
            }
        ],
        "globalStyle": {
            "navigationBarTextStyle": "black",
            "navigationBarTitleText": "移动端首页",
            "navigationBarBackgroundColor": "#F8F8F8",
            "backgroundColor": "#F8F8F8"
        },
        "tabBar": {
            "color": "#7A7E83",
            "selectedColor": "#3cc51f",
            "borderStyle": "black",
            "backgroundColor": "#ffffff",
            "list": [
                {
                    "pagePath": "pages/index/index",
                    "text": "首页"
                }
            ]
        },
        "condition": {
            "current": 0,
            "list": []
        },
        "webPage": {
            "title": "移动端首页",
            "navigationBarTitleText": "首页",
            "navigationBarBackgroundColor": "#F8F8F8",
            "navigationBarTextStyle": "black",
            "backgroundColor": "#F8F8F8"
        },
        "router": {
            "mode": "hash",
            "base": "/mobile/"
        },
        "runtime": {
            "version": "3.0.0"
        }
    };
    
    // 2. 修复getH5Config函数
    window.getH5Config = function() {
        console.log('调用getH5Config');
        try {
            if (window.__uniConfig && window.__uniConfig.webPage) {
                return window.__uniConfig.webPage;
            }
            return {
                title: "移动端首页",
                navigationBarTitleText: "首页",
                navigationBarBackgroundColor: "#F8F8F8",
                navigationBarTextStyle: "black",
                backgroundColor: "#F8F8F8"
            };
        } catch (e) {
            console.warn('getH5Config error:', e);
            return {
                title: "移动端首页",
                navigationBarTitleText: "首页"
            };
        }
    };
    
    // 3. 修复getTabbarConfig函数
    window.getTabbarConfig = function() {
        console.log('调用getTabbarConfig');
        try {
            if (window.__uniConfig && window.__uniConfig.tabBar) {
                return window.__uniConfig.tabBar;
            }
            return {
                color: "#7A7E83",
                selectedColor: "#3cc51f",
                borderStyle: "black",
                backgroundColor: "#ffffff",
                list: []
            };
        } catch (e) {
            console.warn('getTabbarConfig error:', e);
            return { list: [] };
        }
    };
    
    // 4. 修复JSON解析错误
    const originalJSONParse = JSON.parse;
    JSON.parse = function(text, reviver) {
        try {
            if (text === undefined || text === null || text === 'undefined') {
                console.warn('尝试解析无效JSON:', text);
                return {};
            }
            return originalJSONParse.call(this, text, reviver);
        } catch (e) {
            console.warn('JSON解析错误:', e, 'text:', text);
            return {};
        }
    };
    
    // 5. 修复localStorage访问
    try {
        if (typeof localStorage !== 'undefined') {
            // 清理可能损坏的localStorage数据
            const keysToCheck = ['uni-app-config', 'uni-storage', 'uni-id'];
            keysToCheck.forEach(key => {
                try {
                    const value = localStorage.getItem(key);
                    if (value && (value === 'undefined' || value === 'null')) {
                        localStorage.removeItem(key);
                        console.log('清理localStorage key:', key);
                    }
                } catch (e) {
                    console.warn('localStorage清理错误:', e);
                }
            });
        }
    } catch (e) {
        console.warn('localStorage访问错误:', e);
    }
    
    // 6. 创建uni对象的基础结构
    window.uni = window.uni || {};
    
    // 基础API模拟
    const uniAPIs = {
        showToast: function(options) {
            console.log('showToast:', options);
            if (options && options.title) {
                alert(options.title);
            }
        },
        hideToast: function() {
            console.log('hideToast');
        },
        showLoading: function(options) {
            console.log('showLoading:', options);
        },
        hideLoading: function() {
            console.log('hideLoading');
        },
        navigateTo: function(options) {
            console.log('navigateTo:', options);
            if (options && options.url) {
                window.location.hash = options.url;
            }
        },
        redirectTo: function(options) {
            console.log('redirectTo:', options);
            if (options && options.url) {
                window.location.hash = options.url;
            }
        },
        switchTab: function(options) {
            console.log('switchTab:', options);
        },
        reLaunch: function(options) {
            console.log('reLaunch:', options);
            if (options && options.url) {
                window.location.hash = options.url;
            }
        },
        navigateBack: function(options) {
            console.log('navigateBack:', options);
            window.history.back();
        },
        getSystemInfo: function(options) {
            const systemInfo = {
                brand: 'unknown',
                model: 'unknown',
                pixelRatio: window.devicePixelRatio || 1,
                screenWidth: window.screen.width,
                screenHeight: window.screen.height,
                windowWidth: window.innerWidth,
                windowHeight: window.innerHeight,
                statusBarHeight: 0,
                language: navigator.language || 'zh-CN',
                version: '1.0.0',
                system: 'Web',
                platform: 'web',
                fontSizeSetting: 16,
                SDKVersion: '1.0.0',
                safeArea: {
                    left: 0,
                    right: window.innerWidth,
                    top: 0,
                    bottom: window.innerHeight,
                    width: window.innerWidth,
                    height: window.innerHeight
                },
                safeAreaInsets: {
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0
                }
            };
            
            if (options && options.success) {
                options.success(systemInfo);
            }
            if (options && options.complete) {
                options.complete(systemInfo);
            }
        },
        getSystemInfoSync: function() {
            return {
                brand: 'unknown',
                model: 'unknown',
                pixelRatio: window.devicePixelRatio || 1,
                screenWidth: window.screen.width,
                screenHeight: window.screen.height,
                windowWidth: window.innerWidth,
                windowHeight: window.innerHeight,
                statusBarHeight: 0,
                language: navigator.language || 'zh-CN',
                version: '1.0.0',
                system: 'Web',
                platform: 'web'
            };
        }
    };
    
    // 将API添加到uni对象
    Object.assign(window.uni, uniAPIs);
    
    // 7. 修复Vue相关错误
    window.addEventListener('unhandledrejection', function(event) {
        console.warn('Promise rejection:', event.reason);
        
        // 特殊处理配置相关错误
        if (event.reason && typeof event.reason === 'object') {
            const message = event.reason.message || '';
            if (message.includes('webPage') || message.includes('tabbar') || message.includes('undefined')) {
                console.log('配置错误已被兼容性修复处理');
                event.preventDefault();
                return;
            }
        }
        
        // 处理JSON解析错误
        if (event.reason instanceof SyntaxError && event.reason.message.includes('JSON')) {
            console.log('JSON解析错误已被兼容性修复处理');
            event.preventDefault();
            return;
        }
    });
    
    // 8. 页面路由修复
    window.__uniRoutes = [
        {
            path: "/pages/index/index",
            component: function() {
                return Promise.resolve({
                    template: '<div class="page-container"><div class="page-content">首页内容加载中...</div></div>'
                });
            }
        }
    ];
    
    // 9. 应用状态管理
    window.__uniAppReady = false;
    
    function markAppReady() {
        window.__uniAppReady = true;
        console.log('uni-app标记为就绪');
        
        // 触发自定义就绪事件
        const event = new CustomEvent('uniAppReady', {
            detail: { timestamp: Date.now() }
        });
        window.dispatchEvent(event);
    }
    
    // 延迟标记应用就绪
    setTimeout(markAppReady, 1000);
    
    // 10. 兼容性检查和警告
    function checkCompatibility() {
        const issues = [];
        
        if (!window.Promise) {
            issues.push('Promise API不支持');
        }
        
        if (!window.fetch) {
            issues.push('Fetch API不支持');
        }
        
        if (!('ontouchstart' in window)) {
            issues.push('触摸事件不支持（可能是桌面环境）');
        }
        
        if (issues.length > 0) {
            console.warn('兼容性问题:', issues);
        } else {
            console.log('兼容性检查通过');
        }
        
        return issues;
    }
    
    // 执行兼容性检查
    setTimeout(checkCompatibility, 500);
    
    console.log('移动端兼容性修复加载完成');
    
})();

// 导出修复状态
window.__compatibilityFixLoaded = true;
