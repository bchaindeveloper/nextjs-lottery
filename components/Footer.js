
export default function Footer() {
    return (
    
    <div className="fixed bottom-0 p-5 border-b-3 flex"
    style={{
        backgroundColor: 'black',
        width: '100%',
        height: '170px',
        flexWrap: 'below'
      }}>
        <a href="https://github.com/bchaindeveloper/smartcontract-lottery" alt="BChainDev" target="_blank" rel="noreferrer">
            <h1 className="py-4 px-4 font-bold text-3xl text-white">BChainDev Production</h1>
        </a>
            <p className="pr-4 pl-4 bottom-2 font-normal text-[14px] text-white fixed">
            Copyright © 2022 - 2023 BChainDev. All rights reserved.
          </p>
    </div>
    )
}