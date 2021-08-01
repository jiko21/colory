describe('should display correct browser', () => {
  beforeAll(async () => {
    await page.goto('http://localhost:5000/');
  });

  afterAll(async () => {
    await page.close();
  });

  it('correctly opened', async () => {
    const title = await page.title();
    expect(title).toBe('Colory');
  });

  it('correctly change color [by text form]', async () => {
    await page.fill('input[data-testid="color-text"]', '#FF00FF');
    const colorInput = await page.$('input[data-testid="color-text"]');
    expect(await colorInput?.inputValue()).toBe('#FF00FF');
    expect(await page.url()).toBe('http://localhost:5000/?color=%23FF00FF');
  });

  it('correctly change color [by color picker]', async () => {
    const SELECTOR = 'input[data-testid="color-picker"]';
    await (await page?.$(SELECTOR))?.click();
    await page.waitForTimeout(300);
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');

    // R
    await page.keyboard.type('255');
    await page.keyboard.press('Tab');

    // G
    await page.keyboard.type('255');
    await page.keyboard.press('Tab');

    // B
    await page.keyboard.type('00');

    await page.keyboard.press('Enter');
    await page.waitForTimeout(300);
    const colorInput = await page.$('input[data-testid="color-picker"]');
    expect(await colorInput?.inputValue()).toBe('#ffff00');
    expect(await page.url()).toBe('http://localhost:5000/?color=%23ffff00');
  });

  it('correctly add color [by text form]', async () => {
    await page.click('[data-testid="add-button"]');
    const colorInputs = await page.$$('input[data-testid="color-text"]');
    expect(colorInputs.length).toBe(2);
  });

  it('correctly edit color (multiple form)', async () => {
    const colorInput1 = (await page.$$('input[data-testid="color-text"]'))[1];
    colorInput1.fill('#00ffff');
    const colorInputs = await page.$$('input[data-testid="color-text"]');
    expect(await colorInputs[0]?.inputValue()).toBe('#ffff00');
    expect(await colorInputs[1]?.inputValue()).toBe('#00ffff');
    expect(await page.url()).toBe('http://localhost:5000/?color=%23ffff00&color=%2300ffff');
  });

  it('correctly copy url', async () => {
    const context = await browser.newContext();
    context.grantPermissions(['clipboard-read']);
    await (await page.$('button[data-testid="link-button"]'))?.click();
    expect(await page.evaluate(async () => await navigator.clipboard.readText())).toEqual(
      'http://localhost:5000/?color=%23ffff00&color=%2300ffff',
    );
  });
});
