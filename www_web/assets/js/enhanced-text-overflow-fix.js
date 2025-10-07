/**
 * 增强版文字溢出修复脚本
 * 针对www_web网站发现的具体问题进行精确修复
 */

class EnhancedTextOverflowFixer {
    constructor(options = {}) {
        this.config = {
            debug: false,
            checkInterval: 500,
            maxChecks: 20,
            
            // 具体问题的修复配置
            specificFixes: {
                // 主页标题修复
                '.pannel1 .title-box': {
                    maxWidth: '100%',
                    fontSize: 'clamp(1.8rem, 5vw, 3rem)',
                    lineHeight: '1.3',
                    wordBreak: 'keep-all',
                    overflowWrap: 'break-word',
                    priority: 'high'
                },
                
                // 按钮文字修复
                '.start-btn': {
                    fontSize: 'clamp(0.875rem, 3vw, 1rem)',
                    padding: 'clamp(12px, 3vw, 15px) clamp(20px, 4vw, 30px)',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    maxWidth: '100%',
                    minWidth: '200px',
                    priority: 'high'
                },
                
                // 痛点列表修复
                '.item-txt': {
                    fontSize: 'clamp(0.875rem, 2.5vw, 1rem)',
                    lineHeight: '1.5',
                    wordBreak: 'break-all',
                    overflowWrap: 'break-word',
                    display: 'flex',
                    alignItems: 'flex-start',
                    priority: 'medium'
                },
                
                // 解决方案标题修复
                '.sub-title, .head-div': {
                    fontSize: 'clamp(1.2rem, 4vw, 1.6rem)',
                    lineHeight: '1.4',
                    wordBreak: 'keep-all',
                    overflowWrap: 'break-word',
                    maxWidth: '100%',
                    priority: 'medium'
                },
                
                // 功能标签修复
                '.bg-box span, .label1, .label2, .label3, .label4, .label5, .label6, .label7': {
                    fontSize: 'clamp(0.75rem, 2.2vw, 0.9rem)',
                    padding: 'clamp(8px, 2vw, 12px) clamp(12px, 3vw, 18px)',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    maxWidth: 'calc(100vw - 60px)',
                    priority: 'low'
                }
            },
            
            // 响应式断点
            breakpoints: {
                mobile: 767,
                tablet: 1024,
                desktop: 1440
            },
            
            ...options
        };
        
        this.fixedElements = new Map();
        this.checkCount = 0;
        this.currentBreakpoint = this.getCurrentBreakpoint();
        
        this.init();
    }
    
    init() {
        if (this.config.debug) {
            console.log('增强版文字溢出修复脚本启动');
        }
        
        // 等待DOM加载
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.start());
        } else {
            this.start();
        }
    }
    
    start() {
        this.applySpecificFixes();
        this.setupObservers();
        this.startPeriodicCheck();
    }
    
    getCurrentBreakpoint() {
        const width = window.innerWidth;
        if (width <= this.config.breakpoints.mobile) return 'mobile';
        if (width <= this.config.breakpoints.tablet) return 'tablet';
        if (width <= this.config.breakpoints.desktop) return 'desktop';
        return 'wide';
    }
    
    applySpecificFixes() {
        Object.entries(this.config.specificFixes).forEach(([selector, styles]) => {
            const elements = document.querySelectorAll(selector);
            
            elements.forEach(element => {
                if (this.shouldIgnoreElement(element)) return;
                
                // 应用样式修复
                Object.entries(styles).forEach(([property, value]) => {
                    if (property === 'priority') return;
                    
                    const cssProperty = this.camelToKebab(property);
                    element.style.setProperty(cssProperty, value, 'important');
                });
                
                // 特殊处理逻辑
                this.applySpecialLogic(element, selector, styles);
                
                this.fixedElements.set(element, {
                    selector,
                    timestamp: Date.now(),
                    breakpoint: this.currentBreakpoint
                });
                
                if (this.config.debug) {
                    console.log(`应用修复: ${selector}`, element);
                }
            });
        });
    }
    
    applySpecialLogic(element, selector, styles) {
        // 主页标题特殊处理
        if (selector.includes('.pannel1 .title-box')) {
            // 移动端移除强制换行
            if (this.currentBreakpoint === 'mobile') {
                const br = element.querySelector('br');
                if (br) br.style.display = 'none';
            }
        }
        
        // 按钮特殊处理
        if (selector.includes('.start-btn')) {
            // 移动端允许换行
            if (this.currentBreakpoint === 'mobile' && element.scrollWidth > element.clientWidth) {
                element.style.setProperty('white-space', 'normal', 'important');
                element.style.setProperty('line-height', '1.3', 'important');
                element.style.setProperty('height', 'auto', 'important');
            }
        }
        
        // 痛点列表特殊处理
        if (selector.includes('.item-txt')) {
            const icon = element.querySelector('i');
            if (icon) {
                icon.style.setProperty('flex-shrink', '0', 'important');
                icon.style.setProperty('margin-right', 'clamp(8px, 2vw, 12px)', 'important');
                icon.style.setProperty('margin-top', '3px', 'important');
            }
        }
        
        // 功能标签特殊处理
        if (selector.includes('label') || selector.includes('.bg-box span')) {
            if (this.currentBreakpoint === 'mobile') {
                element.style.setProperty('position', 'relative', 'important');
                element.style.setProperty('margin', 'clamp(4px, 1vw, 8px)', 'important');
            }
        }
    }
    
    setupObservers() {
        // 窗口大小变化监听
        window.addEventListener('resize', this.debounce(() => {
            const newBreakpoint = this.getCurrentBreakpoint();
            if (newBreakpoint !== this.currentBreakpoint) {
                this.currentBreakpoint = newBreakpoint;
                this.reapplyFixes();
            }
        }, 300));
        
        // DOM变化监听
        if (window.MutationObserver) {
            this.mutationObserver = new MutationObserver((mutations) => {
                let shouldRecheck = false;
                
                mutations.forEach(mutation => {
                    if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
                        shouldRecheck = true;
                    }
                });
                
                if (shouldRecheck) {
                    this.debounce(() => this.applySpecificFixes(), 100)();
                }
            });
            
            this.mutationObserver.observe(document.body, {
                childList: true,
                subtree: true
            });
        }
    }
    
    startPeriodicCheck() {
        const checkInterval = setInterval(() => {
            this.checkCount++;
            
            if (this.checkCount > this.config.maxChecks) {
                clearInterval(checkInterval);
                if (this.config.debug) {
                    console.log('定期检查已停止，达到最大检查次数');
                }
                return;
            }
            
            this.checkAndReapplyIfNeeded();
        }, this.config.checkInterval);
    }
    
    checkAndReapplyIfNeeded() {
        let needsReapply = false;
        
        this.fixedElements.forEach((info, element) => {
            if (!document.contains(element)) {
                this.fixedElements.delete(element);
                needsReapply = true;
            } else if (this.hasOverflow(element)) {
                needsReapply = true;
            }
        });
        
        if (needsReapply) {
            this.applySpecificFixes();
        }
    }
    
    hasOverflow(element) {
        return element.scrollWidth > element.clientWidth || 
               element.scrollHeight > element.clientHeight;
    }
    
    shouldIgnoreElement(element) {
        // 检查是否在忽略列表中
        const ignoreSelectors = [
            '.no-fix', '.ignore-overflow', 'script', 'style', 'meta',
            '.el-carousel__indicators', '.iconfont', 'i'
        ];
        
        return ignoreSelectors.some(selector => {
            try {
                return element.matches(selector) || element.closest(selector);
            } catch (e) {
                return false;
            }
        });
    }
    
    reapplyFixes() {
        this.fixedElements.clear();
        this.applySpecificFixes();
        
        if (this.config.debug) {
            console.log(`断点变化，重新应用修复: ${this.currentBreakpoint}`);
        }
    }
    
    camelToKebab(str) {
        return str.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase();
    }
    
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
    
    // 公共方法
    getStats() {
        return {
            fixedCount: this.fixedElements.size,
            checkCount: this.checkCount,
            currentBreakpoint: this.currentBreakpoint
        };
    }
    
    reset() {
        this.fixedElements.clear();
        this.checkCount = 0;
    }
    
    forceRecheck() {
        this.applySpecificFixes();
    }
    
    destroy() {
        if (this.mutationObserver) {
            this.mutationObserver.disconnect();
        }
        this.fixedElements.clear();
    }
}

// 导出类
if (typeof module !== 'undefined' && module.exports) {
    module.exports = EnhancedTextOverflowFixer;
} else if (typeof window !== 'undefined') {
    window.EnhancedTextOverflowFixer = EnhancedTextOverflowFixer;
}

// 自动初始化（如果在浏览器环境中）
if (typeof window !== 'undefined' && typeof document !== 'undefined') {
    // 等待页面加载完成后自动初始化
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            window.enhancedTextOverflowFixer = new EnhancedTextOverflowFixer({
                debug: process?.env?.NODE_ENV === 'development'
            });
        });
    } else {
        window.enhancedTextOverflowFixer = new EnhancedTextOverflowFixer({
            debug: process?.env?.NODE_ENV === 'development'
        });
    }
}
