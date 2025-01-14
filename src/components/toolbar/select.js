import Icon from '@mdi/react'

const WrapSelect = (props) => {
        const { options, icon, value, onChange } = props
        return (
            <label>
                <Icon
                    path={icon}
                    size={'22px'}
                    className={'villain-icon'}
                    style={{ marginTop: '7px', marginRight: '6px' }}
                />
                <select
                    value={value}
                    onChange={onChange}
                    style={{ position: 'relative', bottom: '6px' }}
                >
                    {options.map(item => (
                        <option value={item} key={item}>
                            {item}
                        </option>
                    ))}
                </select>
            </label>
        )
    }

export default WrapSelect
