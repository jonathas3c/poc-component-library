import { User } from 'phosphor-react'
import { AvatarContainer, AvatarImage, AvatarFallback } from './styles'
import { ComponentProps } from 'react'

export interface AvatarProps extends ComponentProps<typeof AvatarImage> {}

export function Avatar(props: AvatarProps) {
  return (
    <div>
      <AvatarContainer>
        <AvatarImage {...props} />
        <AvatarFallback delayMs={600}>
          <User />
        </AvatarFallback>
      </AvatarContainer>
    </div>
  )
}

Avatar.displayName = 'Avatar'
