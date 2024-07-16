export default function NavItemSubFooter({ href, svgUrl, icon, pathUrl }) {
    return (
        <>
            <li className="nav-item">
                <a className="nav-link link-dark" href={href}>
                    <svg xmlns={svgUrl} width="24" height="24" fill="currentColor" className={icon} viewBox="0 0 16 16">
                        <path d={pathUrl} />
                    </svg>
                </a>
            </li>
        </>
    )
}