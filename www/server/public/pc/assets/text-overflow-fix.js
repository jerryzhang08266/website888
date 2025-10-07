/**
 * PC端文字溢出自动修复脚本
 * 自动检测和修复页面中的文字溢出问题
 */

(function() {
    'use strict';
    
    console.log('PC端文字溢出修复脚本开始加载...');
    
    // 配置选项
    const config = {
        // 检测间隔（毫秒）
        checkInterval: 1000,
        // 最大检测次数
        maxChecks: 10,
        // 是否启用调试模式
        debug: false,
        // 需要检查的选择器
        selectors: [
            'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
            'p', 'span', 'div', 'a', 'button',
            '.nav-item', '.menu-item', '.title', '.content',
            '.card-title', '.list-item', '.table-cell'
        ],
        // 忽略的选择器
        ignoreSelectors: [
            '.no-fix', '.ignore-overflow', 'script', 'style', 'meta'
        ]
    };
    
    let checkCount = 0;
    let fixedElements = new Set();
    
    // 检测元素是否有文字溢出
    function hasTextOverflow(element) {
        if (!element || !element.textContent || !element.textContent.trim()) {
            return false;
        }
        
        // 检查水平溢出
        const hasHorizontalOverflow = element.scrollWidth > element.clientWidth;
        
        // 检查垂直溢出
        const hasVerticalOverflow = element.scrollHeight > element.clientHeight;
        
        return hasHorizontalOverflow || hasVerticalOverflow;
    }
    
    // 获取元素的文本内容长度
    function getTextLength(element) {
        return element.textContent ? element.textContent.trim().length : 0;
    }
    
    // 判断是否为中文字符
    function isChinese(char) {
        return /[\u4e00-\u9fff]/.test(char);
    }
    
    // 判断文本是否主要为中文
    function isChineseText(text) {
        if (!text) return false;
        const chineseChars = text.match(/[\u4e00-\u9fff]/g);
        return chineseChars && chineseChars.length > text.length * 0.5;
    }
    
    // 应用文字溢出修复
    function applyTextOverflowFix(element, type = 'ellipsis') {
        if (fixedElements.has(element)) {
            return; // 已经修复过的元素不重复处理
        }
        
        const computedStyle = window.getComputedStyle(element);
        const text = element.textContent.trim();
        
        // 保存原始样式
        if (!element.dataset.originalOverflow) {
            element.dataset.originalOverflow = computedStyle.overflow;
            element.dataset.originalWhiteSpace = computedStyle.whiteSpace;
            element.dataset.originalWordBreak = computedStyle.wordBreak;
        }
        
        // 根据文本类型和元素类型选择修复方案
        let fixClass = '';
        
        if (element.tagName.match(/^H[1-6]$/)) {
            // 标题元素
            if (text.length > 50) {
                fixClass = 'title-text-multiline';
            } else {
                fixClass = 'title-text';
            }
        } else if (element.tagName === 'BUTTON' || element.classList.contains('btn')) {
            // 按钮元素
            fixClass = 'button-text';
        } else if (element.classList.contains('nav-item') || element.closest('nav')) {
            // 导航元素
            fixClass = 'nav-text';
        } else if (element.tagName === 'TD' || element.tagName === 'TH') {
            // 表格单元格
            fixClass = 'table-cell-text';
        } else if (text.length > 100) {
            // 长文本
            if (isChineseText(text)) {
                fixClass = 'text-ellipsis-3 chinese-text';
            } else {
                fixClass = 'text-ellipsis-3 english-text';
            }
        } else if (text.length > 30) {
            // 中等长度文本
            fixClass = 'text-ellipsis-2';
        } else {
            // 短文本
            fixClass = 'text-ellipsis';
        }
        
        // 应用修复类
        element.classList.add(...fixClass.split(' '));
        
        // 添加响应式文字类
        if (!element.classList.contains('text-responsive')) {
            element.classList.add('text-responsive');
        }
        
        // 确保容器有正确的样式
        if (element.parentElement) {
            element.parentElement.classList.add('container-responsive');
        }
        
        fixedElements.add(element);
        
        if (config.debug) {
            console.log('修复文字溢出:', {
                element: element.tagName + (element.className ? '.' + element.className.split(' ')[0] : ''),
                text: text.substring(0, 30) + (text.length > 30 ? '...' : ''),
                fixClass: fixClass,
                textLength: text.length
            });
        }
    }
    
    // 检查并修复页面中的文字溢出
    function checkAndFixTextOverflow() {
        checkCount++;
        
        if (checkCount > config.maxChecks) {
            console.log('文字溢出检查达到最大次数，停止检查');
            return;
        }
        
        let fixedCount = 0;
        
        // 获取所有需要检查的元素
        const elements = document.querySelectorAll(config.selectors.join(','));
        
        elements.forEach(element => {
            // 跳过已经修复的元素
            if (fixedElements.has(element)) {
                return;
            }
            
            // 跳过忽略的元素
            if (config.ignoreSelectors.some(selector => element.matches(selector))) {
                return;
            }
            
            // 跳过不可见的元素
            if (element.offsetWidth === 0 || element.offsetHeight === 0) {
                return;
            }
            
            // 跳过没有文本内容的元素
            if (!element.textContent || !element.textContent.trim()) {
                return;
            }
            
            // 跳过只包含子元素的容器
            if (element.children.length > 0 && !element.textContent.trim()) {
                return;
            }
            
            // 检查是否有文字溢出
            if (hasTextOverflow(element)) {
                applyTextOverflowFix(element);
                fixedCount++;
            }
        });
        
        if (config.debug && fixedCount > 0) {
            console.log(`第${checkCount}次检查完成，修复了${fixedCount}个文字溢出问题`);
        }
        
        // 继续检查（处理动态加载的内容）
        if (checkCount < config.maxChecks) {
            setTimeout(checkAndFixTextOverflow, config.checkInterval);
        }
    }
    
    // 处理窗口大小变化
    function handleResize() {
        // 清除已修复的记录，重新检查
        fixedElements.clear();
        checkCount = 0;
        
        // 移除之前添加的修复类
        document.querySelectorAll('[class*="text-"], [class*="title-"], [class*="nav-"], [class*="button-"]').forEach(element => {
            const classes = element.className.split(' ').filter(cls => 
                !cls.startsWith('text-') && 
                !cls.startsWith('title-') && 
                !cls.startsWith('nav-') && 
                !cls.startsWith('button-') &&
                !cls.startsWith('table-cell-') &&
                !cls.startsWith('chinese-') &&
                !cls.startsWith('english-')
            );
            element.className = classes.join(' ');
        });
        
        // 重新开始检查
        setTimeout(checkAndFixTextOverflow, 100);
    }
    
    // 防抖函数
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
    
    // 初始化
    function init() {
        // 添加CSS文件
        const cssLink = document.createElement('link');
        cssLink.rel = 'stylesheet';
        cssLink.href = '/assets/text-overflow-fix.css';
        document.head.appendChild(cssLink);
        
        // 等待CSS加载完成后开始检查
        cssLink.onload = function() {
            console.log('文字溢出修复CSS加载完成');
            checkAndFixTextOverflow();
        };
        
        // 监听窗口大小变化
        window.addEventListener('resize', debounce(handleResize, 300));
        
        // 监听DOM变化（处理动态内容）
        if (window.MutationObserver) {
            const observer = new MutationObserver(function(mutations) {
                let shouldCheck = false;
                mutations.forEach(function(mutation) {
                    if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
                        shouldCheck = true;
                    }
                });
                
                if (shouldCheck) {
                    setTimeout(checkAndFixTextOverflow, 500);
                }
            });
            
            observer.observe(document.body, {
                childList: true,
                subtree: true
            });
        }
        
        console.log('PC端文字溢出修复脚本初始化完成');
    }
    
    // 页面加载完成后初始化
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
    
    // 导出到全局（用于调试）
    window.textOverflowFix = {
        checkAndFix: checkAndFixTextOverflow,
        config: config,
        fixedElements: fixedElements,
        reset: function() {
            fixedElements.clear();
            checkCount = 0;
        }
    };
    
})();

console.log('PC端文字溢出修复脚本加载完成');
