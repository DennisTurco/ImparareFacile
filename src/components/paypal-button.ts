export function renderPayPalButton() {
  (window as any).PayPal.Donation.Button({
    env: 'production',
    hosted_button_id: 'KSE2ZLBWFVQEG',
    image: {
      src: 'https://www.paypalobjects.com/it_IT/IT/i/btn/btn_donate_LG.gif',
      alt: 'Fai una donazione con il pulsante PayPal',
      title: 'Sostieni questo sito con una donazione',
    }
  }).render('#donate-button');
}
