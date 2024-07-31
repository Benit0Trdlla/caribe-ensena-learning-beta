import BtnLocked from "./BtnLocked"
import BtnUnlocked from "./BtnUnlocked"
export default function Botones() {
    const Botones = [<BtnUnlocked />, <BtnLocked />, <BtnLocked />, <BtnLocked />]
    return (
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                {/* <li className="breadcrumb-item active" aria-current="page">
                    <BtnUnlocked />
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                    <BtnLocked />
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                    <BtnLocked />
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                    <BtnLocked />
                </li> */}
                {Botones.map((button, index) => (
                    <li key={index} className="breadcrumb-item active" aria-current="page">
                        {button}
                    </li>
                ))}
            </ol>
        </nav>
    )
}