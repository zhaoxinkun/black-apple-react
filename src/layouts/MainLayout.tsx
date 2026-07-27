// 这个组件是一个简单的布局组件，它接收三个 props：header、content 和 footer。
// 如果没有传入这些 props，它会使用默认的标题、内容和页脚。

import type {ReactNode} from "react"

export default function MainLayout({header, content, footer}: {
    header?: ReactNode;
    content?: ReactNode;
    footer?: ReactNode;
}) {
    return (
        <div className="bg-background text-foreground">
            {header ?? <h1>默认标题</h1>}
            {content ?? <h1>默认内容</h1>}
            {footer ?? <h1>默认页脚</h1>}
        </div>
    )
}
