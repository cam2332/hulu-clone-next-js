import { createUltimatePagination } from 'react-ultimate-pagination'
import {
  ChevronLeftIcon,
  ChevronDoubleLeftIcon,
  ChevronRightIcon,
  ChevronDoubleRightIcon
} from '@heroicons/react/outline'

function Pagination({
  page,
  totalPages,
  onChange }: {
    page?: number,
    totalPages?: number,
    onChange: (page: number) => void
  }): JSX.Element{
  const UltimatePagination = createUltimatePagination({
    itemTypeToComponent: itemTypeToComponent,
    WrapperComponent: Wrapper
  })

  return (
    <UltimatePagination
      currentPage={page || 0}
      totalPages={totalPages || 0}
      onChange={(newPage: number) => onChange(newPage)}
      />
  )
}

export default Pagination

function Page(props: any) {
  return (
    <button
      style={{outline: 'none'}}
      className={`pagination-button 
      ${props.isActive &&
        'font-bold text-[#06202A] bg-white hover:bg-white'}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >{props.value}</button>
  )
}

function Ellipsis(props: any) {
  return <button
    className={'pagination-button'}
    onClick={props.onClick}
    disabled={props.disabled}>...</button>
}

function FirstPageLink(props: any) {
  return <button
    className={'pagination-button'}
    onClick={props.onClick}
    disabled={props.disabled}>
      <ChevronDoubleLeftIcon className='h-5'/>
    </button>
}

function PreviousPageLink(props: any) {
  return <button
    className={'pagination-button'}
    onClick={props.onClick}
    disabled={props.disabled}>
      <ChevronLeftIcon className='h-5'/>
    </button>
}

function NextPageLink(props: any) {
  return <button
    className={'pagination-button'}
    onClick={props.onClick}
    disabled={props.disabled}>
      <ChevronRightIcon className='h-5'/>
    </button>
}

function LastPageLink(props: any) {
  return <button
    className={'pagination-button'}
    onClick={props.onClick}
    disabled={props.disabled}>
      <ChevronDoubleRightIcon className='h-5'/>
    </button>
}

function Wrapper(props: any) {
  return <div className="flex">{props.children}</div>
}

const itemTypeToComponent = {
  'PAGE': Page,
  'ELLIPSIS': Ellipsis,
  'FIRST_PAGE_LINK': FirstPageLink,
  'PREVIOUS_PAGE_LINK': PreviousPageLink,
  'NEXT_PAGE_LINK': NextPageLink,
  'LAST_PAGE_LINK': LastPageLink
}