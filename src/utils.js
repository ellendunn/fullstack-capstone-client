export const disabled = (props) => {
  return window.matchMedia("(max-width: 700px)").matches
          ? false
          : props.pristine || props.submitting
}
