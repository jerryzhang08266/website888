/**
 * 浏览器兼容性修复脚本
 * 解决网站在不同浏览器中的兼容性问题
 */

// 1. 添加console.log polyfill（针对旧版IE）
if (!window.console) {
    window.console = {
        log: function() {},
        error: function() {},
        warn: function() {},
        info: function() {}
    };
}

// 2. 添加Promise polyfill检查
if (!window.Promise) {
    console.warn('Promise not supported, loading polyfill...');
    // 可以在这里加载Promise polyfill
}

// 3. 添加fetch polyfill检查
if (!window.fetch) {
    console.warn('Fetch not supported, loading polyfill...');
    // 可以在这里加载fetch polyfill
}

// 4. 修复移动端配置错误
(function() {
    'use strict';
    
    // 创建默认配置对象，防止undefined错误
    if (typeof window !== 'undefined') {
        window.__uniConfig = window.__uniConfig || {
            webPage: {
                title: '首页',
                navigationBarTitleText: '首页'
            },
            tabbar: {
                list: []
            }
        };
    }
    
    // 修复getH5Config函数
    if (typeof getH5Config !== 'undefined') {
        const originalGetH5Config = getH5Config;
        window.getH5Config = function() {
            try {
                return originalGetH5Config.apply(this, arguments);
            } catch (e) {
                console.warn('getH5Config error:', e);
                return window.__uniConfig.webPage || {};
            }
        };
    }
    
    // 修复getTabbarConfig函数
    if (typeof getTabbarConfig !== 'undefined') {
        const originalGetTabbarConfig = getTabbarConfig;
        window.getTabbarConfig = function() {
            try {
                return originalGetTabbarConfig.apply(this, arguments);
            } catch (e) {
                console.warn('getTabbarConfig error:', e);
                return window.__uniConfig.tabbar || { list: [] };
            }
        };
    }
})();

// 5. CSS兼容性修复
(function() {
    'use strict';
    
    // 添加CSS前缀支持
    const addCSSPrefixes = function() {
        const style = document.createElement('style');
        style.textContent = `
            /* 修复flexbox兼容性 */
            .flex {
                display: -webkit-box;
                display: -webkit-flex;
                display: -ms-flexbox;
                display: flex;
            }
            
            .flex-col {
                -webkit-box-orient: vertical;
                -webkit-box-direction: normal;
                -webkit-flex-direction: column;
                -ms-flex-direction: column;
                flex-direction: column;
            }
            
            .items-center {
                -webkit-box-align: center;
                -webkit-align-items: center;
                -ms-flex-align: center;
                align-items: center;
            }
            
            .justify-center {
                -webkit-box-pack: center;
                -webkit-justify-content: center;
                -ms-flex-pack: center;
                justify-content: center;
            }
            
            /* 修复transform兼容性 */
            .transform {
                -webkit-transform: translateZ(0);
                -moz-transform: translateZ(0);
                -ms-transform: translateZ(0);
                -o-transform: translateZ(0);
                transform: translateZ(0);
            }
            
            /* 修复transition兼容性 */
            .transition {
                -webkit-transition: all 0.3s ease;
                -moz-transition: all 0.3s ease;
                -ms-transition: all 0.3s ease;
                -o-transition: all 0.3s ease;
                transition: all 0.3s ease;
            }
            
            /* 修复box-sizing兼容性 */
            *, *::before, *::after {
                -webkit-box-sizing: border-box;
                -moz-box-sizing: border-box;
                box-sizing: border-box;
            }
            
            /* 修复移动端点击高亮 */
            * {
                -webkit-tap-highlight-color: transparent;
                -webkit-touch-callout: none;
                -webkit-user-select: none;
                -khtml-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none;
            }
            
            input, textarea {
                -webkit-user-select: text;
                -khtml-user-select: text;
                -moz-user-select: text;
                -ms-user-select: text;
                user-select: text;
            }
        `;
        document.head.appendChild(style);
    };
    
    // DOM加载完成后添加CSS修复
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', addCSSPrefixes);
    } else {
        addCSSPrefixes();
    }
})();

// 6. 移动端viewport修复
(function() {
    'use strict';
    
    // 确保viewport meta标签正确设置
    const ensureViewport = function() {
        let viewport = document.querySelector('meta[name="viewport"]');
        if (!viewport) {
            viewport = document.createElement('meta');
            viewport.name = 'viewport';
            document.head.appendChild(viewport);
        }
        
        // 设置标准的移动端viewport
        viewport.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, viewport-fit=cover';
    };
    
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', ensureViewport);
    } else {
        ensureViewport();
    }
})();

// 7. 错误处理增强
window.addEventListener('error', function(e) {
    console.error('Global error caught:', e.error);
    // 可以在这里添加错误上报逻辑
});

window.addEventListener('unhandledrejection', function(e) {
    console.error('Unhandled promise rejection:', e.reason);
    // 防止未处理的Promise rejection导致页面崩溃
    e.preventDefault();
});

// 8. 页面加载完成后的兼容性检查
document.addEventListener('DOMContentLoaded', function() {
    console.log('Browser compatibility fixes loaded');
    
    // 检查关键功能是否可用
    const features = {
        'Promise': typeof Promise !== 'undefined',
        'fetch': typeof fetch !== 'undefined',
        'localStorage': typeof localStorage !== 'undefined',
        'sessionStorage': typeof sessionStorage !== 'undefined',
        'addEventListener': typeof document.addEventListener !== 'undefined'
    };
    
    console.log('Browser feature support:', features);
    
    // 如果是移动端，添加额外的移动端修复
    if (/Mobi|Android/i.test(navigator.userAgent)) {
        // 修复移动端100vh问题
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', vh + 'px');
        
        window.addEventListener('resize', function() {
            const vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', vh + 'px');
        });
    }
});

console.log('Browser compatibility script loaded successfully');
