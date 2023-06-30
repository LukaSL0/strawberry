export default function FeaturesLayout(props) {

    return (
        <div className="feature-box">
            <img src={props.icon} alt="" />
            <h2>{props.feature}</h2>
            <p>{props.desc}</p>
        </div>
    )
}