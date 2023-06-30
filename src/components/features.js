import '../style/features.css';
import FeaturesLayout from './modules/features-layout.js';

export default function Features() {

    return (
        <section>
            <div className="features" id="features">
                <h1>FEATURES</h1>
                <div className="features-showcase">
                    <FeaturesLayout icon="https://cdn.discordapp.com/attachments/890745869832454145/1124174160713752586/detections.png"
                        feature="Detections"
                        desc="Our Screenshare Tool can detect from simplest to advanced and paid clients." 
                    />
                    <FeaturesLayout icon="https://cdn.discordapp.com/attachments/890745869832454145/1124174160093007973/support.png"
                        feature="Support"
                        desc="Our 24/7 support is made with tickets at our Discord, make sure to join it." 
                    />
                    <FeaturesLayout icon="https://cdn.discordapp.com/attachments/890745869832454145/1124174160936063096/efficiency.png"
                        feature="Efficiency"
                        desc="You can be sure that you will have one of the most efficient Screenshare Tool on the market, with our ~30-second scans." 
                    />
                    <FeaturesLayout icon="https://cdn.discordapp.com/attachments/890745869832454145/1124174159539355688/protections.png"
                        feature="Protection"
                        desc="We have the strongest protection as possible to avoid being leaked and keeping authentication secure." 
                    />
                    <FeaturesLayout icon="https://cdn.discordapp.com/attachments/890745869832454145/1124174160361439242/uptime.png"
                        feature="UpTime"
                        desc="Our Screenshare Tool is weekly updated. (Last Update: xx/xx/xxxx)" 
                    />
                    <FeaturesLayout icon="https://cdn.discordapp.com/attachments/890745869832454145/1124174159228981298/infrastructure.png"
                        feature="Infrastructure"
                        desc="Our Tool is made to be as optimized as possible, trying to run in all devices without freezing." 
                    />
                </div>
            </div>
        </section>
    )
}