import * as React from 'react'
import Link from 'next/link'
import DashItems from '../../utils/constants/dash-item'

const DashboardWrapper: React.FC = () => {
    return (
        <div className="container-fluid">
            <div>
                Halo, John Doe
            </div>

            <div>
                <ul>
                    {DashItems.map((link, index) => (
                    <li><Link key={index} href={link.path}><a>{link.title}</a></Link></li>
                    ))}
                </ul>
            </div>
            <style jsx>{`
            
            
            `}
            </style>
        </div>
    )
}

export default DashboardWrapper