import { ConnectButton } from "web3uikit"

export default function Header() {
    return (
        <nav className="p-5 border-b-3 flex flex-row"
        style={{
            backgroundColor: 'black',
            width: '100%',
            height: '100px'
          }}>
            <h1 className="py-1 px-4 font-bold text-3xl text-white"> Decentralized Lottery</h1>
            <div className="ml-auto py-1 px-4">
                <ConnectButton moralisAuth={false}/>
            </div>
        </nav>
    )
}