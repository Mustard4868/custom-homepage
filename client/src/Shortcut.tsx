interface ShortcutProps {
    url: string;
}

function Shortcut(props: ShortcutProps) {
    return (
        <form action={props.url} className="pl-2 pr-2 pt-4 hover:scale-125 duration-250 ease-in-out">
            <input type="image" alt={`shortcut ${props.url}`} src={`${props.url}/favicon.ico`} value="" className="p-1 h-16 w-16 border-2 border-cat-macchiato-pink bg-cat-macchiato-crust bg-opacity-50 text-white rounded-xl" />
        </form>
    )
}

export default Shortcut