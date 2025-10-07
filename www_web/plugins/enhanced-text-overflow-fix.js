/**
 * 增强版Nuxt.js插件：文字溢出修复
 * 针对发现的具体问题进行精确修复
 */

import EnhancedTextOverflowFixer from '~/assets/js/enhanced-text-overflow-fix.js'

export default ({ app }, inject) => {
    // 只在客户端运行
    if (process.client) {
        let fixer = null;
        
        // 初始化修复器
        const initFixer = () => {
            if (fixer) {
                fixer.destroy();
            }
            
            fixer = new EnhancedTextOverflowFixer({
                debug: process.env.NODE_ENV === 'development',
                
                // 针对www_web网站的特殊配置
                specificFixes: {
                    // 主页标题修复 - 高优先级
                    '.pannel1 .title-box': {
                        maxWidth: '100%',
                        fontSize: 'clamp(1.8rem, 5vw, 3rem)',
                        lineHeight: '1.3',
                        wordBreak: 'keep-all',
                        overflowWrap: 'break-word',
                        textAlign: 'left',
                        priority: 'high'
                    },
                    
                    // 按钮文字修复 - 高优先级
                    '.start-btn': {
                        fontSize: 'clamp(0.875rem, 3vw, 1rem)',
                        padding: 'clamp(12px, 3vw, 15px) clamp(20px, 4vw, 30px)',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        maxWidth: '100%',
                        minWidth: '200px',
                        display: 'inline-block',
                        boxSizing: 'border-box',
                        textAlign: 'center',
                        priority: 'high'
                    },
                    
                    // 痛点列表修复 - 中等优先级
                    '.item-txt': {
                        fontSize: 'clamp(0.875rem, 2.5vw, 1rem)',
                        lineHeight: '1.5',
                        wordBreak: 'break-all',
                        overflowWrap: 'break-word',
                        display: 'flex',
                        alignItems: 'flex-start',
                        marginBottom: 'clamp(12px, 2.5vw, 18px)',
                        maxWidth: '100%',
                        priority: 'medium'
                    },
                    
                    // 解决方案标题修复 - 中等优先级
                    '.sub-title, .head-div': {
                        fontSize: 'clamp(1.2rem, 4vw, 1.6rem)',
                        lineHeight: '1.4',
                        wordBreak: 'keep-all',
                        overflowWrap: 'break-word',
                        maxWidth: '100%',
                        marginBottom: 'clamp(15px, 3vw, 25px)',
                        priority: 'medium'
                    },
                    
                    // 功能标签修复 - 低优先级
                    '.bg-box span, .label1, .label2, .label3, .label4, .label5, .label6, .label7': {
                        fontSize: 'clamp(0.75rem, 2.2vw, 0.9rem)',
                        padding: 'clamp(8px, 2vw, 12px) clamp(12px, 3vw, 18px)',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        maxWidth: 'calc(100vw - 60px)',
                        boxSizing: 'border-box',
                        display: 'inline-block',
                        lineHeight: '1.3',
                        priority: 'low'
                    },
                    
                    // 关于页面标题修复
                    '.container .pannel1 .title-box': {
                        fontSize: 'clamp(1.8rem, 5vw, 2.5rem)',
                        lineHeight: '1.3',
                        maxWidth: '100%',
                        wordBreak: 'keep-all',
                        overflowWrap: 'break-word',
                        priority: 'medium'
                    },
                    
                    // 关于页面描述修复
                    '.container .pannel1 .txt-box': {
                        fontSize: 'clamp(1rem, 3vw, 1.25rem)',
                        lineHeight: '1.6',
                        wordBreak: 'break-all',
                        overflowWrap: 'break-word',
                        maxWidth: '100%',
                        priority: 'medium'
                    }
                },
                
                // 响应式断点配置
                breakpoints: {
                    mobile: 767,
                    tablet: 1024,
                    desktop: 1440
                }
            });
            
            if (process.env.NODE_ENV === 'development') {
                console.log('增强版文字溢出修复器已初始化');
            }
        };
        
        // 路由变化时重新初始化
        app.router.afterEach((to, from) => {
            // 延迟执行，确保页面内容已渲染
            setTimeout(() => {
                initFixer();
            }, 300);
        });
        
        // 页面加载完成后初始化
        if (document.readyState === 'complete') {
            initFixer();
        } else {
            window.addEventListener('load', () => {
                setTimeout(initFixer, 100);
            });
        }
        
        // 注入到Vue实例中
        inject('enhancedTextOverflowFixer', {
            // 手动触发检查
            check() {
                if (fixer) {
                    fixer.forceRecheck();
                }
            },
            
            // 重置修复状态
            reset() {
                if (fixer) {
                    fixer.reset();
                }
            },
            
            // 获取修复统计
            getStats() {
                if (fixer) {
                    return fixer.getStats();
                }
                return { fixedCount: 0, checkCount: 0, currentBreakpoint: 'unknown' };
            },
            
            // 重新初始化
            reinit() {
                initFixer();
            },
            
            // 获取当前断点
            getCurrentBreakpoint() {
                if (fixer) {
                    return fixer.currentBreakpoint;
                }
                return 'unknown';
            }
        });
        
        // 全局错误处理
        window.addEventListener('error', (event) => {
            if (event.error && event.error.message && 
                event.error.message.includes('TextOverflowFixer')) {
                console.warn('文字溢出修复器出现错误，尝试重新初始化:', event.error);
                setTimeout(initFixer, 1000);
            }
        });
        
        if (process.env.NODE_ENV === 'development') {
            console.log('增强版文字溢出修复插件已加载');
            
            // 开发模式下的调试工具
            window.debugTextOverflow = {
                getStats: () => fixer ? fixer.getStats() : null,
                recheck: () => fixer ? fixer.forceRecheck() : null,
                reset: () => fixer ? fixer.reset() : null,
                reinit: initFixer
            };
        }
    }
}
