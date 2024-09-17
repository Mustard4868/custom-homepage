interface ShortcutProps {
    url: string;
}

function Shortcut(props: ShortcutProps) {
    return (
        <form action={props.url} className="pl-1 pr-1 pt-2 hover:scale-110 duration-300 ease-in-out">
            <input type="image" src={`https://s2.googleusercontent.com/s2/favicons?domain_url=${props.url}`} value="" className="p-1 h-16 w-16 border-2 border-cat-macchiato-green bg-cat-macchiato-crust bg-opacity-50 text-white rounded-xl" />
        </form>
    )
}

export default Shortcut