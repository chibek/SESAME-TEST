import React from 'react'
import {ButtonTypes} from '../../../enums/generic/button-types'
const Button = (props,className) => {
    const classNames = [props.className,'rounded-full','focus:outline-none'];
	const styles = {
		[ButtonTypes.PRIMARY]: [
			'text-white',
			'bg-primary',
			'hover:bg-primary-hover',
            'dark:bg-dark-primary',
            'dark:hover:bg-dark-hover',
		],
		[ButtonTypes.SECONDARY]: ['text-white', 'bg-secondary', 'hover:bg-secondary-hover'],
	};
    classNames.push(...styles[props.kind]);
	className && classNames.push(className);
	className = classNames.join(' ');

    return(
    <button className={className}>{props.children}</button>
    )
}

export default Button;