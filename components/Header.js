import { ConnectButton } from "web3uikit"

export default function Header() {
    return (
        <nav className="p-5 border-b-3"
        style={{
            backgroundColor: '#c8c8c0',
            width: '100%',
            height: '170px',
            flexWrap: 'below'
          }}>
            <h1 className="py-1 px-4 font-bold text-3xl text-black"> Decentralized Lottery</h1>
            <div className="ml-auto py-3 px-4">
                <ConnectButton moralisAuth={false}/>
            </div>
            <hr         style={{
            backgroundColor: 'black',
            height: '4px',
          }}></hr>
        </nav>
    )
}