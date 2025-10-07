/**
 * Nuxt.js插件：文字溢出修复
 * 在客户端自动加载和初始化文字溢出修复脚本
 */

import TextOverflowFixer from '~/assets/js/text-overflow-fix.js'

export default ({ app }, inject) => {
    // 只在客户端运行
    if (process.client) {
        // 等待Vue应用挂载完成后初始化
        app.router.afterEach(() => {
            // 延迟执行，确保页面内容已渲染
            setTimeout(() => {
                // 检查是否已经初始化过
                if (!window.textOverflowFixer || window.textOverflowFixer.destroyed) {
                    // 创建新的修复器实例
                    window.textOverflowFixer = new TextOverflowFixer({
                        debug: process.env.NODE_ENV === 'development',
                        // 针对www_web网站的特殊配置
                        selectors: [
                            // 主要内容选择器
                            '.title-box', '.txt-box', '.start-btn', '.item-txt',
                            '.subtitle-box', '.head-div', '.brand-txt',
                            '.content-box-m h3', '.content-box-m p',
                            '.bg-box span', '.label1', '.label2', '.label3', '.label4', '.label5', '.label6', '.label7',
                            
                            // 通用选择器
                            'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
                            'p', 'span:not(.iconfont)', 'div', 'a', 'button',
                            '.nav-item', '.menu-item', '.content',
                            '.card-title', '.list-item'
                        ],
                        ignoreSelectors: [
                            '.no-fix', '.ignore-overflow', 'script', 'style', 'meta',
                            '.el-carousel__indicators', '.iconfont', 'i',
                            '.el-input', '.el-button', '.circle-box', '.bg-div',
                            '.pattern1', '.pattern2', '.pattern3', '.pattern4', '.pattern5'
                        ],
                        containerSelectors: [
                            '.pannel1', '.pannel2', '.pannel3', '.pannel4', 
                            '.pannel5', '.pannel6', '.pannel7',
                            '.content-box', '.item-box', '.bg-box',
                            '.content-box-m', '.item-div', '.rewards-box'
                        ]
                    })
                    
                    console.log('文字溢出修复器已在路由切换后重新初始化')
                } else {
                    // 重新检查当前页面
                    window.textOverflowFixer.reset()
                    window.textOverflowFixer.checkAndFix()
                    
                    console.log('文字溢出修复器已重新检查当前页面')
                }
            }, 500) // 延迟500ms确保内容渲染完成
        })
        
        // 注入到Vue实例中
        inject('textOverflowFixer', {
            // 手动触发检查
            check() {
                if (window.textOverflowFixer) {
                    window.textOverflowFixer.checkAndFix()
                }
            },
            
            // 重置修复状态
            reset() {
                if (window.textOverflowFixer) {
                    window.textOverflowFixer.reset()
                }
            },
            
            // 获取修复统计
            getStats() {
                if (window.textOverflowFixer) {
                    return {
                        fixedCount: window.textOverflowFixer.fixedElements.size,
                        checkCount: window.textOverflowFixer.checkCount
                    }
                }
                return { fixedCount: 0, checkCount: 0 }
            }
        })
        
        console.log('文字溢出修复插件已加载')
    }
}
