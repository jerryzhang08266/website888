/**
 * www_web网站文字溢出自动修复脚本
 * 针对Nuxt.js/Vue.js应用的文字溢出检测和修复
 */

class TextOverflowFixer {
    constructor(options = {}) {
        this.config = {
            // 检测间隔（毫秒）
            checkInterval: 1000,
            // 最大检测次数
            maxChecks: 15,
            // 是否启用调试模式
            debug: false,
            // 需要检查的选择器
            selectors: [
                '.title-box', '.txt-box', '.start-btn', '.item-txt',
                '.subtitle-box', '.head-div', '.brand-txt',
                'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
                'p', 'span', 'div', 'a', 'button',
                '.nav-item', '.menu-item', '.content',
                '.card-title', '.list-item'
            ],
            // 忽略的选择器
            ignoreSelectors: [
                '.no-fix', '.ignore-overflow', 'script', 'style', 'meta',
                '.el-carousel__indicators', '.iconfont', 'i'
            ],
            // 容器选择器
            containerSelectors: [
                '.pannel1', '.pannel2', '.pannel3', '.pannel4', 
                '.pannel5', '.pannel6', '.pannel7',
                '.content-box', '.item-box', '.bg-box'
            ],
            ...options
        };
        
        this.checkCount = 0;
        this.fixedElements = new Set();
        this.resizeObserver = null;
        this.mutationObserver = null;
        
        this.init();
    }
    
    // 初始化
    init() {
        console.log('文字溢出修复脚本初始化...');
        
        // 等待DOM加载完成
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.start());
        } else {
            this.start();
        }
    }
    
    // 开始修复
    start() {
        // 添加CSS文件
        this.loadCSS();
        
        // 开始检测
        this.startChecking();
        
        // 监听窗口大小变化
        this.setupResizeObserver();
        
        // 监听DOM变化
        this.setupMutationObserver();
        
        console.log('文字溢出修复脚本启动完成');
    }
    
    // 加载CSS文件
    loadCSS() {
        const cssLink = document.createElement('link');
        cssLink.rel = 'stylesheet';
        cssLink.href = '/assets/css/text-overflow-fix.css';
        cssLink.onload = () => {
            if (this.config.debug) {
                console.log('文字溢出修复CSS加载完成');
            }
        };
        document.head.appendChild(cssLink);
    }
    
    // 开始检测循环
    startChecking() {
        this.checkAndFix();
        
        const checkInterval = setInterval(() => {
            this.checkCount++;
            
            if (this.checkCount >= this.config.maxChecks) {
                clearInterval(checkInterval);
                if (this.config.debug) {
                    console.log('文字溢出检测达到最大次数，停止检测');
                }
                return;
            }
            
            this.checkAndFix();
        }, this.config.checkInterval);
    }
    
    // 检测元素是否有文字溢出
    hasTextOverflow(element) {
        if (!element || !element.textContent || !element.textContent.trim()) {
            return false;
        }
        
        // 跳过不可见元素
        if (element.offsetWidth === 0 || element.offsetHeight === 0) {
            return false;
        }
        
        // 检查水平溢出
        const hasHorizontalOverflow = element.scrollWidth > element.clientWidth;
        
        // 检查垂直溢出
        const hasVerticalOverflow = element.scrollHeight > element.clientHeight;
        
        return hasHorizontalOverflow || hasVerticalOverflow;
    }
    
    // 判断文本类型
    getTextType(text) {
        if (!text) return 'empty';
        
        const chineseChars = text.match(/[\u4e00-\u9fff]/g);
        const isChinese = chineseChars && chineseChars.length > text.length * 0.5;
        
        return {
            isChinese,
            length: text.length,
            hasNumbers: /\d/.test(text),
            hasEnglish: /[a-zA-Z]/.test(text)
        };
    }
    
    // 获取元素类型
    getElementType(element) {
        const tagName = element.tagName.toLowerCase();
        const className = element.className || '';
        
        if (tagName.match(/^h[1-6]$/)) return 'heading';
        if (tagName === 'button' || className.includes('btn')) return 'button';
        if (className.includes('title')) return 'title';
        if (className.includes('nav')) return 'navigation';
        if (tagName === 'p' || className.includes('txt')) return 'paragraph';
        if (tagName === 'span' && className.includes('label')) return 'label';
        if (tagName === 'a') return 'link';
        
        return 'text';
    }
    
    // 应用修复
    applyFix(element) {
        if (this.fixedElements.has(element)) {
            return;
        }
        
        const text = element.textContent.trim();
        const textType = this.getTextType(text);
        const elementType = this.getElementType(element);
        
        // 根据元素类型和文本特征选择修复策略
        let fixClasses = [];
        
        switch (elementType) {
            case 'heading':
                if (textType.length > 50) {
                    fixClasses.push('title-multiline-fix');
                } else {
                    fixClasses.push('title-text-fix');
                }
                break;
                
            case 'button':
                fixClasses.push('btn-text-fix');
                break;
                
            case 'title':
                if (textType.length > 30) {
                    fixClasses.push('title-multiline-fix');
                } else {
                    fixClasses.push('title-text-fix');
                }
                break;
                
            case 'navigation':
                fixClasses.push('nav-text-fix');
                break;
                
            case 'paragraph':
                if (textType.length > 100) {
                    fixClasses.push('text-overflow-3lines');
                } else if (textType.length > 50) {
                    fixClasses.push('text-overflow-multiline');
                } else {
                    fixClasses.push('content-text-fix');
                }
                break;
                
            case 'label':
                fixClasses.push('text-overflow-fix');
                break;
                
            case 'link':
                fixClasses.push('text-overflow-fix');
                break;
                
            default:
                if (textType.length > 100) {
                    fixClasses.push('text-overflow-3lines');
                } else if (textType.length > 30) {
                    fixClasses.push('text-overflow-multiline');
                } else {
                    fixClasses.push('text-overflow-fix');
                }
        }
        
        // 添加中文文字优化
        if (textType.isChinese) {
            fixClasses.push('chinese-text-fix');
        }
        
        // 添加响应式文字类
        if (elementType === 'heading' || elementType === 'title') {
            fixClasses.push('responsive-title');
        } else if (elementType === 'paragraph') {
            fixClasses.push('responsive-text');
        }
        
        // 应用修复类
        element.classList.add(...fixClasses);
        
        // 确保容器有正确的样式
        if (element.parentElement) {
            element.parentElement.classList.add('container-fix');
        }
        
        this.fixedElements.add(element);
        
        if (this.config.debug) {
            console.log('修复文字溢出:', {
                element: element.tagName + (element.className ? '.' + element.className.split(' ')[0] : ''),
                text: text.substring(0, 30) + (text.length > 30 ? '...' : ''),
                type: elementType,
                textType: textType,
                fixClasses: fixClasses
            });
        }
    }
    
    // 检查并修复
    checkAndFix() {
        let fixedCount = 0;
        
        // 获取所有需要检查的元素
        const elements = document.querySelectorAll(this.config.selectors.join(','));
        
        elements.forEach(element => {
            // 跳过已经修复的元素
            if (this.fixedElements.has(element)) {
                return;
            }
            
            // 跳过忽略的元素
            if (this.config.ignoreSelectors.some(selector => {
                try {
                    return element.matches(selector);
                } catch (e) {
                    return false;
                }
            })) {
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
            
            // 跳过只包含子元素的容器（除非是特定的容器）
            if (element.children.length > 0 && 
                !element.textContent.trim() && 
                !this.config.containerSelectors.some(selector => element.matches(selector))) {
                return;
            }
            
            // 检查是否有文字溢出或需要预防性修复
            if (this.hasTextOverflow(element) || this.needsPreventiveFix(element)) {
                this.applyFix(element);
                fixedCount++;
            }
        });
        
        if (this.config.debug && fixedCount > 0) {
            console.log(`第${this.checkCount + 1}次检查完成，修复了${fixedCount}个文字溢出问题`);
        }
    }
    
    // 判断是否需要预防性修复
    needsPreventiveFix(element) {
        const text = element.textContent.trim();
        const textType = this.getTextType(text);
        
        // 长文本需要预防性修复
        if (textType.length > 50) return true;
        
        // 中文文本在小屏幕上容易溢出
        if (textType.isChinese && window.innerWidth < 768) return true;
        
        // 特定元素类型需要预防性修复
        const elementType = this.getElementType(element);
        if (['button', 'label', 'navigation'].includes(elementType)) return true;
        
        return false;
    }
    
    // 设置窗口大小变化监听
    setupResizeObserver() {
        const handleResize = this.debounce(() => {
            // 清除已修复的记录，重新检查
            this.reset();
            this.checkAndFix();
        }, 300);
        
        window.addEventListener('resize', handleResize);
        
        // 使用ResizeObserver监听元素大小变化
        if (window.ResizeObserver) {
            this.resizeObserver = new ResizeObserver(entries => {
                let needsRecheck = false;
                entries.forEach(entry => {
                    if (this.fixedElements.has(entry.target)) {
                        needsRecheck = true;
                    }
                });
                
                if (needsRecheck) {
                    this.debounce(() => this.checkAndFix(), 100)();
                }
            });
            
            // 观察主要容器
            this.config.containerSelectors.forEach(selector => {
                document.querySelectorAll(selector).forEach(element => {
                    this.resizeObserver.observe(element);
                });
            });
        }
    }
    
    // 设置DOM变化监听
    setupMutationObserver() {
        if (!window.MutationObserver) return;
        
        this.mutationObserver = new MutationObserver(mutations => {
            let shouldCheck = false;
            
            mutations.forEach(mutation => {
                if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
                    // 检查是否有新的文本节点
                    mutation.addedNodes.forEach(node => {
                        if (node.nodeType === Node.ELEMENT_NODE) {
                            shouldCheck = true;
                        }
                    });
                }
                
                if (mutation.type === 'characterData') {
                    shouldCheck = true;
                }
            });
            
            if (shouldCheck) {
                this.debounce(() => this.checkAndFix(), 500)();
            }
        });
        
        this.mutationObserver.observe(document.body, {
            childList: true,
            subtree: true,
            characterData: true
        });
    }
    
    // 重置修复状态
    reset() {
        this.fixedElements.clear();
        this.checkCount = 0;
        
        // 移除之前添加的修复类
        document.querySelectorAll('[class*="text-"], [class*="title-"], [class*="btn-"], [class*="nav-"], [class*="chinese-"], [class*="responsive-"]').forEach(element => {
            const classes = element.className.split(' ').filter(cls => 
                !cls.includes('text-') && 
                !cls.includes('title-') && 
                !cls.includes('btn-') &&
                !cls.includes('nav-') &&
                !cls.includes('chinese-') &&
                !cls.includes('responsive-')
            );
            element.className = classes.join(' ');
        });
    }
    
    // 防抖函数
    debounce(func, wait) {
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
    
    // 销毁
    destroy() {
        if (this.resizeObserver) {
            this.resizeObserver.disconnect();
        }
        
        if (this.mutationObserver) {
            this.mutationObserver.disconnect();
        }
        
        this.reset();
    }
}

// 自动初始化
if (typeof window !== 'undefined') {
    window.TextOverflowFixer = TextOverflowFixer;
    
    // 自动启动修复器
    const fixer = new TextOverflowFixer({
        debug: process.env.NODE_ENV === 'development'
    });
    
    // 导出到全局（用于调试）
    window.textOverflowFixer = fixer;
}

export default TextOverflowFixer;
