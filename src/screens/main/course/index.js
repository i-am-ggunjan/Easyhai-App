import React from 'react'
import Web from '../../../components/features/Web'

const Course = () => {
    const liveClass = "Easyhai by Gaurav Gunjan"

    return (
        <Web url={`https://meet.easyhaionline.com/${liveClass}`} />
    )
}

export default Course