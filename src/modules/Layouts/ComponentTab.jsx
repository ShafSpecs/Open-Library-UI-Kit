import React, { useEffect } from 'react'

const ComponentTab = ({ content }) => {
    return (
        <div className='codetab'>
            <div class="right menu">
                <div class={`ui animated bottom right floated button`} tabindex="0">
                    <div class="visible content">
                        <i class="css3 alternate icon"></i>
                    </div>
                    <div class="hidden content">
                        CSS
                    </div>
                </div>
                <div class={`ui vertical animated right floated button`} tabindex="0">
                    <div class="visible content">
                        <i class="react icon"></i>
                    </div>
                    <div class="hidden content">
                        React
                    </div>
                </div>
            </div>
            <div>
                {content}
            </div>
        </div>
    )
}

export default ComponentTab
